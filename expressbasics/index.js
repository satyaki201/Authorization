const express=require('express');
const app=express();
app.get('/contact',(req,res)=>{
    res.send(`Hi this is ${req.query.name}`);
})
app.listen(5000,()=>{
    console.log("Heard On Port 4000");
})