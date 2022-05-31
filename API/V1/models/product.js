const mongoose=require('mongoose');
const ProductSchema=mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
Pname:String,
Pid:Number,
Disc:String,
Price:Number,
Pic:String,
Stock:Number
});
module.exports=mongoose.model("FashionMall",ProductSchema,"Prods");