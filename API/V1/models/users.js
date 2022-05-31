const mongoose=require('mongoose');
mongoose.pluralize(null);
const UserSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Uid:Number,
    Username:{type:String,require:true},
    Pass:{type:String,require:true}
});
module.exports=mongoose.model("user",UserSchema);