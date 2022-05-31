const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    
    //שליפת ההדר של האוטוריזיישן ונבדוק האם הטוקן תקין 
    try{
        const authHeader=req.headers.authorization;      
        const token=authHeader.split(" ")[1];
       jwt.verify(token,process.env.SECRET_KEY);
        next();
    }
    catch
    {
       return res.status(401).json({msg:"not authorized request "});
    }

};