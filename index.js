const express=require('express');
const app=express();
const mongoose=require('mongoose');

app.use(express.urlencoded({extended:false}));

mongoose.connect('mongodb://localhost:27017/firstMongoose')
.then(()=>console.log("Connected"))
.catch((err)=>console.log("error",err));

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
    }
});

const user=mongoose.model("user",userSchema);

app.get('/',(req,res)=>{
    res.send("Hi I am Jose Murrinho");
})

app.post('/api/request',async(req,res)=>{
    const body=req.body;
    var result;
    if(body.firstName!="" && body.email!="")
        {
            result = await user.create({
                firstName:body.firstName,
                lastName:body.lastName,
                email:body.email,
                jobTitle:body.jobTitle
            });
            console.log(result);
            res.status(201).json({msg:"Success"});
        }

    else
    {
        res.status(400).json({msg:"Failure"});
    }


});

app.listen(3000,()=>{
    console.log("Connected");
})