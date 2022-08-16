const router=require('express').Router();
const {Login,Register}=require('../controller/T_Users.js');
router.post("/reg",Register);
router.post("/log",Login);
module.exports=router;