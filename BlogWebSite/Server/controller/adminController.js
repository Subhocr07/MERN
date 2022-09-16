const blogSettingModel=require("../models/BlogSettingsModel")
const userModel=require("../models/UserModel");
const bcrypt=require("bcryptjs")


//password hash
const securePassword =async(password)=>{
   try {
        const passwordHash = await bcrypt.hash(password,10)
        return passwordHash;
   } catch (error) {
        res.send(error);
   }

}

const blogTwo=async(req,res)=>{res.send("Blog 2")}



const blogSetup=async(req,res)=>{

    var isBlogPresent=await blogSettingModel.find({})
    try {
        if(isBlogPresent>0){
            res.redirect("/login")
        }else{
            res.redirect("")
        }
    } catch (error) {
        res.send(error)
    }

}
//sending blogs to DB
const blogSetupSave = async(req,res)=>{
        console.log(req.body)
    
        const blog_title=req.body.blog_title;
        const blog_logo=req.body.logo;
        const description=req.body.description;
        const email=req.body.email;
        const name=req.body.name;
        const password= await securePassword(req.body.password)

       blogSettingModel.create({ 
        blog_title: blog_title,
        blog_logo: blog_logo,
        description: description,
       })

     const userInfo=userModel.create({ 
            name: name,
            email: email,
            password: password,
            is_admin: 1,
        })

        if(userInfo){
            res.redirect("/login")
        }else{ 
            res.redirect("/blogsetup")
        }


}

module.exports = {blogTwo,blogSetup,blogSetupSave,securePassword}