const mongoose = require('mongoose');



const DataSchema = new mongoose.Schema({
   
        name:String,
        Description:String,
        Elements:Array
       
     })

    const formSchema = mongoose.model('forms', DataSchema);

    module.exports = formSchema;
