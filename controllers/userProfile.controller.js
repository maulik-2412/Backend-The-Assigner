const User=require('../models/userProfile');

const userProfile=async (req,res)=>{
    console.log(req.body);
    const {name,email,phone,currentLocation,profilePic,educationQualification}=req.body; 
    if(!name || !email ){
        res.json({response:'Any of name  or email is not entered'});
    }else{
        const user=new User({
            name:name,
            email:email,
            phone:phone,
            currentLocation:currentLocation,
            profilePic:profilePic,
            educationQualification:educationQualification
        })

        await user.save();

        console.log(user);
        res.json({response:'User is saved'});
    }
} 

module.exports=userProfile;