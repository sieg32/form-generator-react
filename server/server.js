const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { exit } = require('process');
require('dotenv').config();
const formSchema = require('./schema/schema')

const insight = require('./schema/schema')




const App = express();

App.use(cors());

App.use(express.json())

App.post('/save', async (req,res)=>{
    
    res.send('nigga')
    const {name, Description, data}= req.body;
    console.log(req.body)
    try{
        await formSchema.create(req.body)

    }catch(error){
        console.log(error);
    }
})




App.get('/', async (req,res)=>{

   try{
    const forms = await formSchema.find().select('-Elements')
    res.send(forms)
    
   }catch(error){
    console.log(error)
    res.send("error");
   }

})
App.get('/:id', async (req,res)=>{

    console.log(Boolean(req.params), req.params)
    try{
        const forms = await formSchema.findById(req.params.id)
        res.send(forms)
        
       }catch(error){
        console.log(error)
        res.send("error");
       }
   
})


async function  start(){
    try{
        
        await mongoose.connect(process.env.MONGOOSE_URI).then(()=> console.log('db connect'));
        
    }catch(error){
        console.log(error);
        
    }
   
    App.listen(5000, console.log("server started"));

}

  
start();



