const mssql=require('mssql');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const config={
    user:'yaronraz',
    password:'yaron123',
    server:'127.0.0.1',
    daatabase:'Ecommerce',
    port:1433,
    options:{trustServerCertificate:true}
};
module.exports={

    Login:(req,res)=>{
        mssql.connect(config).then(function(conn){
            const {username,password}=req.body;
            const Sql=`SELECT * from T_users where Username='${username}'`;
            conn.query(Sql).then(function(rows,error){
                if(error || rows.recordset.length!=1)
                return res.status(409).json({msg:"user name or pass not found "});

                const user=rows.recordset[0];
                bcrypt.compare(password,user.password).then((status)=>{
                    if(!status)
                    return res.status(409).json({msg:"user name or pass not found "});
                    const token= jwt.sign({username,Uid:user.Uid},process.env.SECRET_KEY,{expiresIn:'1H'});
                    return res.status(200).json({Uid:user.Uid,token});
                });
            })
        }).catch(function(err){
            console.log(err);
            return res.status(500).json({err});

        });
        },
        
    Register:(req,res)=>{
        mssql.connect(config).then(function(conn){
            const {Username,password} = req.body;
            const Sql = `Select * from T_users where Username='${Username}'`;
          
            conn.query(Sql).then(function(rows){ console.log(2);
                if(rows.recordset.length != 0)
                    return res.status(401).json({Err:"Username already Exist"});

                    bcrypt.hash(password,12).then((hash)=>{
                        console.log(hash);
                        const Sql = `insert into T_users (Username,Pass) values ('${Username}','${hash}')`;
                        console.log(Sql);
                        conn.query(Sql).then((rows,error)=>{ console.log(3);                      
                            return res.status(200).json({msg:"User Registered successfully"});   
                                
                        }).catch((err)=>{
                          
                            return res.status(500).json({err});
                        });
                    }).catch((err)=>{
                       
                        return res.status(500).json({err});
                    });
            }).catch((err)=>{
                return res.status(500).json({err});
            });
        }).catch((err)=>{
            return res.status(500).json({err});
        });
    }


    
}
