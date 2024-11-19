const User=require('../models/userProfile');

const saveUserProfile=async (req,res)=>{
    console.log(req.body);
    const {name,email,phone,currentLocation,profilePic,educationQualification}=req.body; 
    if(!name || !email ){
        res.json({response:'Any of name  or email is not entered'});
    }else{
        try{const user=new User({
            name:name,
            email:email,
            phone:phone,
            currentLocation:currentLocation,
            profilePic:profilePic,
            educationQualification:educationQualification
        })

        await user.save();

        console.log(user);
        res.json({response:'User is saved'});}
        catch(e){
            if (e.code === 11000) {
                return res.status(409).json({ error: 'Email already exists' });
            }
            console.error(error);
            res.status(500).json({ error: 'An error occurred while saving the user profile' });
        
        }
    }
} 

const showUserProfile=async (req,res)=>{
    const query=await User.find({});
    console.log(query)
    res.json({query});
}

module.exports={saveUserProfile,showUserProfile};