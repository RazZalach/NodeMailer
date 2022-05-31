const mongoose=require('mongoose');
mongoose.pluralize(null);
const CateogrySchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Cid:Number,
    Cname:String
});
module.exports=mongoose.model("category",CateogrySchema);