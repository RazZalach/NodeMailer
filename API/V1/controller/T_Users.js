const Users=require("../models/T_Users.js");
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const users = require("../models/T_Users.js");





module.exports={

    Login:(req,res)=>{
        const {email,Pass}=req.body;
            Users.find({email:email}).then((rows)=>{
                if(rows.length==0)
                    return res.status(409).json({msg:`user name not found`});
                bcrypt.compare(Pass,rows[0].Pass).then((status)=>{
                    if(!status)
                    return res.status(409).json({msg:`password not match`});
                    else
                    {
                        subj="mail from raz";
                        body="<h1> hello from nodemailer's raz </h1>";
                        require('../../../emailsend').SendEmail(email,subj,body);
                        const token=jwt.sign({email},process.env.SECRET_KEY,{expiresIn:'1h'});               
                        return res.status(200).json({msg:`Login seccessfull token:${token}`});
                    }
                    
                });
         });
        },
        
    Register:(req,res)=>{
    const {Phone,Bdate,Address,Fullname,email,Pass}=req.body;
    Users.find({email:email}).then((rows)=>{
        if(rows.length>0)
          return res.status(409).json({msg:`email allready exist=${email}`});
        bcrypt.hash(Pass,12).then((hashpass)=>{
            const users=new Users({
                _id:new mongoose.Types.ObjectId(),
                email:email,
                Fullname:Fullname,
                 Pass:hashpass,
                 Phone:Phone,
                 Bdate:Bdate,
                 Address:Address
             
             });
          users.save().then((Users)=>{
          return res.status(200).json({msg:"users added seccessfull"});
          });
        }).catch((error)=>{
            return res.status(505).json({error});
        });
    });
 
   
     

    }
}
