const router=require('express').Router();
const {AddOrder,DeleteOrder,GetAllOrders,GetOrderById}=require('../controller/orders.js');
router.get("/",GetAllOrders);
router.get("/:oid",GetOrderById);
router.post("/",AddOrder);
router.delete("/:OId",DeleteOrder);
module.exports=router;


