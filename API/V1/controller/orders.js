const order=require('../models/orders');
const prods=require('../models/product');
const mongoose=require('mongoose');
module.exports={

    GetAllOrders:(req,res)=>{
        order.find({},{_id:false}).then((order)=>{
            return res.status(200).json(order);
            });  
    },
    GetOrderById:(req,res)=>{
        order.findOne({OId:req.params.oid}).then((order)=>{
            return res.status(200).json(order);
        });

       
    },
    AddOrder:(req,res)=>{
     const {OId,Uid,Odate,Prods}=req.body;
     const Order=new order({
        _id:new mongoose.Types.ObjectId(),
        OId:OId,
        Uid:Uid,
        Odate:Odate,
        Prods:Prods
     });
     Order.save().then(()=>{
         return res.status(200).json({"massage":`order added:${req.body.OId}`});
     });

 
    },
    DeleteOrder:(req,res)=>{
        order.deleteOne({OId:req.params.oid}).then((order)=>{
            return res.status(200).json({massage:`delete order seccsesfully ${req.params.OId}`});
        });
   
    }






};