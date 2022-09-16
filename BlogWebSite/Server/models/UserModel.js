const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    
        name:{
            type: String,
            required: true
        },
        email: {
            type: String, 
            required:true
        },
        password: {
            type: String, 
            required:true
        },
        is_admin: {
            type:String,
            required:true
        }, 
        token: {
            type: String, 
            default: "",
        }
        
    
})
const userModel=mongoose.model("User",userSchema);
module.exports = userModel; 