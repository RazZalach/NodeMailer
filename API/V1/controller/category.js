const category=require('../models/category');
const mongoose=require('mongoose');
module.exports={

    AddCategory:(req,res)=>{
        const {Cid,Cname}=req.body;
        category.insertMany({Cname,Cid}).then((cat)=>{
          return res.status(200).json({massage:`new category added his cid: ${Cid} `})
        });
    },
    UpdateCategory:(req,res)=>{
        category.updateOne({Cid:req.params.cid},req.body).then((cat)=>{
            return res.status(200).json({massage:`update category seccsfully ${req.params.cid}`})
        });
    },
    DeleteCategory:(req,res)=>{
        category.deleteOne({Cid:req.params.cid}).then((cat)=>{
            return res.status(200).json({massage:`delete category seccsesfully ${req.params.cid}`});
        });
    },
    GetAllCategory:(req,res)=>{
        category.find({},{_id:false}).then((cat)=>{
            return res.status(200).json(cat);
            });  
    },
    GetCategoryById:(req,res)=>{
        category.findOne({Cid:req.params.cid},{_id:false}).then((cat)=>{
            return res.status(200).json(cat);
        });
    },
};
