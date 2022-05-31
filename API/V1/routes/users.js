const router=require('express').Router();
const {Login,Register}=require('../controller/usersql.js');
router.post("/reg",Register);
router.post("/log",Login);




module.exports=router;