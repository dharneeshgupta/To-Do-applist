// requiring useful modules
const express=require('express');
const path=require('path');
//server will run on this port
const port=8000;

const db=require('./config/mongoose');
const Todoapp=require('./models/todoappschema');
//this is firing up the xpress
const app=express();

var cur_id=1;
//setting up the view engine!
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('assets'));  

app.use(express.urlencoded());

//the below function will fetch data from database and display on todo app
app.get('/',function(req,res)
{
    Todoapp.find({},function(err,todos)
    {
        if(err)
        {
            console.log("error in fetching todos from db");
            return;
        }

        return res.render('todohome',{
            to_do_app:todos   
           });
    });
});

//foradding task to the todoapp

app.post('/addingtolist',function(req,res)
{
    req.body.id = cur_id++;

    Todoapp.create({
        description:req.body.description,
        category:req.body.category,
        deadline:req.body.deadline,
        id:req.body.id,
        cut:false        
    },function(err,newTodo)
    {
        if(err)
        {
            console.log("error in cretaning todo");
            return;
        }
        return res.redirect('back');
    });
});


// app.post('/updatinglist',function(req,res)
// {
// console.log(req.body);

// });

//for deleting tasks

app.post('/removinglist',function(req,res)
{
 if(req.body.id.length==24)
 {
     let temp=req.body.id;
     Todoapp.findByIdAndDelete(temp,function(err)
     {
        if(err)
        {
            console.log('error in delteting object');
            return;
        }
        
     });
     return res.redirect('back');
  }

for(let i=0;i<(req.body.id.length);i++)
{
let temp=req.body.id[i];
Todoapp.findByIdAndDelete(temp,function(err)
{
if(err)
{
    console.log('error in delteing the object');
    return;
}
});
}

return res.redirect('back');
});



app.listen(port,function(err)
{
    if(err)
    {
        console.log("server is down!");
        
        return;
    }
    console.log("server is up!");
});

