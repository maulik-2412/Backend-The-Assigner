const mongoose=require('mongoose');

const custSchema=mongoose.Schema({
    name:{
        type:String,
        required:true},
    email:{
        type:String,
        required:[true,'email is required']
    },
    phone:Number,
    address:String,
    message:String,
    subject:String
})

const cust=mongoose.model('Customers',custSchema);

module.exports=cust;
