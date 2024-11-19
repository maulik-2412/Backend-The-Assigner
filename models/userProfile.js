const mongoose=require('mongoose');

const UserProfileSchema=mongoose.Schema({
    name:String,
    email:{
        type:String,
    unique:true},
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