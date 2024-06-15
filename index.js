import app from "./app.js";
import mongoose from "mongoose";
(async ()=>{
    await mongoose.connect("mongodb://localhost:27017");
    app.listen(9500,()=>{console.log("Connected")});
})()