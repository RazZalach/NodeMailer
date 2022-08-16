require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const UserRouter=require('./API/V1/routes/T_Users.js');
const mongoose=require('mongoose');
const Auth = require('./API/V1/middlewares/Auth');
const uri=process.env.MONGO_COMN;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("mongo db connected ")});
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/Users",UserRouter);

// app.all("*",(req,res)=>{
// res.status(404).json({msg:"404 page not found"});
// });
module.exports=app; 