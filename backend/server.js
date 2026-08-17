const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt=require("bcryptjs");

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/passwordDB")
.then(()=>console.log("DB Connected"));

const User=mongoose.model("User",{email:String,password:String});

app.post("/signup",async(req,res)=>{
  const hash=await bcrypt.hash(req.body.password,10);
  await new User({email:req.body.email,password:hash}).save();
  res.send("Signup Success");
});

app.post("/login",async(req,res)=>{
  const user=await User.findOne({email:req.body.email});
  if(!user) return res.send("User not found");
  const match=await bcrypt.compare(req.body.password,user.password);
  res.send(match?"Login Success":"Wrong Password");
});

app.listen(5000,()=>console.log("Backend running"));