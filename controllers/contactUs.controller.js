const Cust=require('../models/customers')

const contactUs=async(req,res)=>{
    console.log(req.body);
    const {name,email,phone,address,message,subject}=req.body; 
    if(!name || !email || !message){
        res.json({response:'Any of name,email or message is noy entered'});
    }else{
        const cust=new Cust({
            name:name,
            email:email,
            phone:phone,
            address:address,
            message:message,
            subject:subject
        })

        await cust.save();

        console.log(cust);
        res.json({response:'User is saved'});
    }
}

module.exports=contactUs;