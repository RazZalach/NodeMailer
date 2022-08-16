const mongoose=require('mongoose');
mongoose.pluralize(null);
const AppointmentsSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    AId,
    Adate,
    Adesc,
    Uid
});
module.exports=mongoose.model("T_Appointments",AppointmentsSchema);



//  - 
