const mongoose=require('mongoose');

const UserProfileSchema=mongoose.Schema({
    name:String,
    email:{
        type:String,
    unique:true},
    phone:Number,
    educationalQualification:String,
    profilePic:{
        type:Buffer
    },
    currentLocation:String,
})

const UserProfile=mongoose.model('UserProfiles',UserProfileSchema);

module.exports=UserProfile;