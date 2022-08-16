const http=require('http');
const app=require('./app');
const port=3377;
const server=http.createServer(app);
server.listen(port,()=>{console.log("the server is running")});