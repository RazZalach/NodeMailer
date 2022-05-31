const mongoose=require('mongoose');
const OrdersSchema=mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
OId:Number,
Uid:Number,
Odate:String,
Prods:Array
});
module.exports=mongoose.model("orders",OrdersSchema);