

import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/shruti")
.then(()=>{
    console.log("Databse connected...");
}).catch(err=>{
    console.log("connection failed...");
});

export default mongoose.connection;