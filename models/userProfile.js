const mongoose=require('mongoose');

const UserProfileSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    educationalQualification:String,
    profilePic:{
        data:Buffer,
        contentType:String
    },
    currentLocation:String,
})

const UserProfile=mongoose.model('UserProfiles',UserProfileSchema);

module.exports=UserProfile;