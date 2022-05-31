const router=require('express').Router();
const {AddProduct,UpdateProduct,DeleteProduct,GetAllProduct,GetProductById}=require('../controller/productsql.js');

router.get("/",GetAllProduct);
router.get("/:pid",GetProductById);
router.put("/:pid",UpdateProduct);
router.post("/",AddProduct);
router.delete("/:pid",DeleteProduct);
module.exports=router;