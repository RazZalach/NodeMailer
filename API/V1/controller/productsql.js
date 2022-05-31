
const { status } = require('express/lib/response');
const mssql=require('mssql');
const config ={
    user:'yaronraz',
    password:'yaron123',
    server:'127.0.0.1',
    daatabase:'Ecommerce',
    port:1433,
    options:{trustServerCertificate:true}
};
module.exports={
    AddProduct:(req,res)=>{ // הוספת מוצר חדש
        const {Pname,Price,Pic} = req.body;
        mssql.connect(config).then(function(conn){
            const sql=`insert into T_prods(Pname,Price,Pic) values('${Pname}',${Price},'${Pic}')`;
            conn.query(sql).then(function(rows){
                sql=`select *  from T_prods where Pname=${Pname}`;
                conn.query(sql).then(function(prod){
                    const pid=prod.recordset[0].Pid;
                   
                })
                return res.status(200).json({res:pid});
            }).catch(function(err){
                return res.status(409).json({res:err});
            })
        }).catch(function(err){
            return res.status(409).json({res:err});
        });

},
UpdateProduct:(req,res)=>{
    mssql.connect(config).then(function(conn){
        const {Pname,Price,Pic} = req.body;
        const Pid=req.params.pid;
        const sql=`update T_prods set Pname='${Pname}',price=${Price} where Pid=${Pid}`;
        console.log(sql);
        conn.query(sql).then(function(rows){
            return res.status(200).json({res:rows.rowsAffected});
        }).catch();
    }).catch();

},
DeleteProduct:(req,res)=>{
  mssql.connect(config).then(function(conn){
      const Pid=req.params.pid;
const sql=`delete from T_prods where Pid=${Pid}`;
conn.query(sql).then(function(rows){
    return res.status(200).json({res:rows.rowsAffected})
}).catch(function(err){
    return res.status(500).json({res:err});
});
  }).catch(function(){
    return res.status(500).json({res:err});
  });

},
GetAllProduct:(req,res)=>{  
    mssql.connect(config).then(function(conn){
      const sql=`select * from T_prods`;  
      conn.query(sql).then(function(rows){
        return res.status(200).json({res:rows.recordset});
      }).catch(function(err){
          return res.status(500).json({eroor:err});
      })
    }).catch(function(err){
        return res.status(500).json({eroor:err});
    });
     
},
GetProductById:(req,res)=>{
mssql.connect(config).then(function(conn){
    const Pid=req.params.pid;
    const sql=`select * from T_prods where Pid=${Pid}`;
    conn.query(sql).then(function(rows){
        return res.status(200).json({res:rows.recordset});
    }).catch(function(err){
        return res.status(500).json({res:err});
    });
}).catch(function(err){
    return res.status(500).json({res:err});
});
}
};

