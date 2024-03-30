require('dotenv').config();
const express=require('express');
const app=express();
const Port= process.env.PORT || process.env.PORT_ID;

const db = require('./config/mongoose')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/',require('./routes'));


app.listen(Port,function(err){
    if(err){
        console.log(err)
        return;
    }
    console.log("server is runing ...",Port);
})