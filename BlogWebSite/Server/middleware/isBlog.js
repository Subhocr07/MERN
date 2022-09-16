const blogSettingModel = require('../models/BlogSettingsModel');


const isBlog = async(req,res,next)=>{
    try {
        const isBlogPresent = await blogSettingModel.find({});
        if(isBlogPresent==0 && req.originalUrl != "/blog-setup"){ //it will block every link without this "/blog-setup"
            res.redirect("/blog-setup")
        }else{
            next()
        }
    } catch (error) {
        console.log(error);
    }
    
}

module.exports={isBlog}
