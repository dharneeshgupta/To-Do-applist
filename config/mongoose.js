// establishing conncetion with mongodb

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/todoapp_db');

  const db=mongoose.connection;

  db.on('error',console.error.bind(console,'error connecting to db'));

  db.once('open',function()
  {
      console.log('sucessful connceting to db');
  });