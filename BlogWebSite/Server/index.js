const express=require('express');
const mongoose=require('mongoose');
const server = express();


const PORT=process.env.PORT||7070;
const MONGOURI="";

server.listen(PORT,(err)=>{
    !err? console.log(`Server started at ${PORT}`):Console.log(err);
});
server.get("/",(req,res)=>{
    res.send("Blog route started")
})