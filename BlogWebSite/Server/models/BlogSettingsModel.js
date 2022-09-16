const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    
        blog_title: {
            type: String,
            required: true
        },
        blog_logo: {
            type: String, 
        },
        description: {
            type: String, 
            required:true
        },
        
    
})
const blogModel=mongoose.model("Blogsetting",blogSchema);
module.exports = blogModel;