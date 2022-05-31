const Users=require("../models/users.js");
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { options } = require("../routes/product.js");
const users = require("../models/users.js");
module.exports={

    Login:(req,res)=>{
        const {Username,Pass}=req.body;
            Users.find({Username:Username}).then((rows)=>{
                if(rows.length==0)
                    return res.status(409).json({msg:`user name not found`});
                bcrypt.compare(Pass,rows[0].Pass).then((status)=>{
                    if(!status)
                    return res.status(409).json({msg:`password not match`});
                    else
                    {
                        const token=jwt.sign({Username},process.env.SECRET_KEY,{expiresIn:'1h'});
                        return res.status(200).json({msg:`Login seccessfull token:${token}`});
                    }
                    
                });
         });
        },
        
    Register:(req,res)=>{
    const {Uid,Username,Pass}=req.body;
    Users.find({Username}).then((rows)=>{
        if(rows.length>0)
          return res.status(409).json({msg:`User name  allready exist=${Username}`});
        bcrypt.hash(Pass,12).then((hashpass)=>{
            const users=new Users({
                _id:new mongoose.Types.ObjectId(),
                 Uid,
                 Username,
                 Pass:hashpass
             });
          users.save().then((Users)=>{
          return res.status(200).json({msg:"users added"});
          });
        }).catch((error)=>{
            return res.status(505).json({error});
        });
    });
 
   
     

    }
}
