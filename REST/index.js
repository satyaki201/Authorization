const express=require('express');
const data=require('./Data.json')
const fs=require('fs');
const app=express();
const PORT=7000;

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>
{
    res.send("Hi this is The Home Page");
});
app.get('/request',(req,res)=>{
    res.json(data.map(user => user.email));
})

app.get('/api/request/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=data.find((user)=>user.id===id);
    return res.json(user);
});
app.post('/api/request', (req, res) => {
    const body = req.body;
    const newUser = { ...body, id: data.length + 1 };
    data.push(newUser);
    fs.writeFile("./Data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error('Error writing to file:', err);  // Log file write error
            return res.status(500).json({ status: "error", message: "Failed to write data" });
        }
        return res.json({ status: "success", user: newUser });
    });
});


app.listen(PORT,()=>{
    console.log("App started on "+PORT);
});