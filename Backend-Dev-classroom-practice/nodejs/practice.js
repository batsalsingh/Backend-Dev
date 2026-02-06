const http = require('http');
const url =require('url');
const fs =require('fs');

const server = http.createServer((req,res)=>{
});

server.listen(8000,()=>{
    console.log("server is running on port 8000");
});