const express=require('express');
const app=express();
const cors=require('cors');
const morgan=require('morgan');
const ProductRouter=require('./API/V1/routes/product.js');
const CategoryRouter=require('./API/V1/routes/category.js');
const OrderRouter=require('./API/V1/routes/orders.js')
const UserRouter=require('./API/V1/routes/users.js');
const Auths=require('./API/V1/middlewares/Auth');
const mongoose=require('mongoose');
const Auth = require('./API/V1/middlewares/Auth');
require('dotenv').config();
const uri=process.env.MONGO_COMN;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("mongo db connected ")});
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/Orders",Auth,OrderRouter);
app.use("/Category",Auth,CategoryRouter);
app.use("/Users",UserRouter);
app.use("/Products",ProductRouter);

// app.all("*",(req,res)=>{
// res.status(404).json({msg:"404 page not found"});
// });
module.exports=app; 