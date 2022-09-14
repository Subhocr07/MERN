const express=require('express');
const mongoose=require('mongoose');
const server = express();

//connection port
const PORT=process.env.PORT||7070;

//DB link
const MONGOURI="mongodb+srv://InstaCluster:Subho2022@instaclauster.xpboj.mongodb.net/BMS";

//bodyparser
server.use(express.json());
server.use(express.urlencoded({ extended: false }))

//isBlog middleware to check blog is present or not present
const isBlog =require("./middleware/isBlog");
server.use(isBlog.isBlog);

//for admin routes
const adminRoutes = require("./routes/adminRoutes")
//admin routes
server.use("/",adminRoutes)

//starting server
server.listen(PORT,(err)=>{
    !err? console.log(`Server started at ${PORT}`):Console.log(err);
});

//connect app to DB
mongoose.connect(MONGOURI,(err)=>{
    !err? console.log(`DB connected at InstaCluster`): console.log(err);
});

//first testing request
server.get("/",(req,res)=>{
    res.send("Blog route started")
});
