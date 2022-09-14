const express = require('express');
const router=express.Router();

//calling the router function from adminController
const adminController= require('../controller/adminController');

router.get('/',adminController.blogOne);
router.get('/blog',adminController.blogTwo);
router.get('/blog-setup',adminController.blogSetup);

module.exports = router;


