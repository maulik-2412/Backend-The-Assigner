const express=require('express');
const router=express.Router();
const userProfile=require('../controllers/userProfile.controller');
const multer=require('multer');

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

router.post("/",upload.single('profilePic'),userProfile.saveUserProfile);

router.get("/",userProfile.showUserProfile);

module.exports=router;