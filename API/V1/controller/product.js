const product=require('../models/product');
const mongoose=require('mongoose');
module.exports={
    AddProduct:(req,res)=>{ // הוספת מוצר חדש
        const {pid,pname,price,pic,stock} = req.body;
        const Prod = new product({
           _id:new mongoose.Types.ObjectId(),
           Pid:pid,
           Pname:pname,
           Price:price,
           Pic:pic,
           Stock:stock

//            Pname:String,
// Pid:Number,
// Disc:String,
// Price:Number,
// Pic:String,
// Stock:Number
        });
        Prod.save().then(()=>{
            return res.status(200).json({"Message":`The new prod id is: ${req.body.pid} `});//נקודת קצה שהניתוב שקיבלה תחזיר את הודעת ה json
        })

},
UpdateProduct:(req,res)=>{
product.updateOne({Pid:req.params.pid},req.body).then((prod)=>{
    return res.status(200).json({massage:`update prod seccsfully ${req.params.pid}`})
});

},
DeleteProduct:(req,res)=>{
    product.deleteOne({Pid:req.params.pid}).then((prod)=>{
        return res.status(200).json({massage:`delete prod seccsesfully ${req.params.pid}`});
    });

},
GetAllProduct:(req,res)=>{  
    product.find({},{_id:false}).then((prods)=>{
    return res.status(200).json(prods);
    });  
},
GetProductById:(req,res)=>{
product.findOne({Pid:req.params.pid},{_id:false}).then((prod)=>{
    return res.status(200).json(prod);
});
}
};

