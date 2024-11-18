const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Cust=require('./models/customers');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

async function main() {
    try{await mongoose.connect("mongodb://localhost:27017/Backend-The_AssignerDB")}
    catch(err){
        console.log(err);
    }
}

main().catch(console.error);



app.route('/contactus')
    .get((req,res)=>{
        res.send('hello')
    })
    .post(async(req,res)=>{
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
    })


app.listen('3000',function(){
    console.log('server started');
})
