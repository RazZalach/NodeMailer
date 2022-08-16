const mongoose=require('mongoose');
mongoose.pluralize(null);
const UserSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:{type:String,require:true},
    Fullname:{type:String,require:true},
    Pass:{type:String,require:true},
    Phone:String,
    Bdate:String,
    Address:String

});
module.exports=mongoose.model("T_Users",UserSchema);


