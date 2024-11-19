const express=require('express');
const router=express.Router();
const userProfile=require('../controllers/userProfile.controller');


router.post("/",userProfile.saveUserProfile);

router.get("/",userProfile.showUserProfile);

module.exports=router;