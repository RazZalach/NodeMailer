const router=require('express').Router();
const {AddCategory,UpdateCategory,DeleteCategory,GetAllCategory,GetCategoryById}=require('../controller/category.js');
router.get("/",GetAllCategory);
router.get("/:cid",GetCategoryById);
router.put("/:cid",UpdateCategory);
router.post("/",AddCategory);
router.delete("/:cid",DeleteCategory);
module.exports=router;