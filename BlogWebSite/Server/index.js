const express=require('express');
const mongoose=require('mongoose');
const server = express();


const PORT=process.env.PORT||7070;
const MONGOURI="mongodb+srv://InstaCluster:Subho2022@instaclauster.xpboj.mongodb.net/test";

server.listen(PORT,(err)=>{
    !err? console.log(`Server started at ${PORT}`):Console.log(err);
});
mongoose.connect(MONGOURI,(err)=>{
    !err? console.log(`DB connected at InstaCluster`): console.log(err);
});
server.get("/",(req,res)=>{
    res.send("Blog route started")
});