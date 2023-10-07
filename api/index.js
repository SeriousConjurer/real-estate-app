

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
 // we cannot use environmental variables(.env) by default , we use dotenv to access them
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})

const app = express();
app.listen(3000, () => {
  console.log("sever listening to port 3000");
});
