const express = require('express');
const router=express.Router();

//calling the router function from adminController
const adminController= require('../controller/adminController');

router.get('/blog',adminController.blogTwo);
router.post('/blogsetup',adminController.blogSetupSave);

module.exports = router;


