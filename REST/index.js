const express=require('express');
const data=require('./Data.json')
const app=express();
const PORT=7000;
app.get('/',(req,res)=>
{
    res.send("Hi this is The Home Page");
});
app.get('/request',(req,res)=>{
    return res.send(data.map(user => user.email));
})


app.listen(PORT,()=>{
    console.log("App started on"+PORT);
});