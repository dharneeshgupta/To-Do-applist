
// requiring mongoose module and then defining schema for json

const mongoose=require('mongoose');

const todoappschema=new mongoose.Schema({
    description:{
        type:String,
        require:true
    }
    ,
    category:{  
        type:String,
        require:true
    },
    deadline:{
        type:Date,
        require:true
    },
    id:{
        type:Number,
        require:true
    },
    cut:
    {
        type:Boolean,
        require:true
    }
});


const Todoapp = mongoose.model('Todoapp',todoappschema);

module.exports=Todoapp;
