// Import Module
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();


// Database Connection
mongoose.connect('mongodb://localhost/TEST_REST',{useNewUrlParser:true});
const db = mongoose.connection;
db.on('error',(error)=>console.log(error));
db.once('open',()=>console.log('Connect to database'));


//Setup
app.use(methodOverride("_method"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

//Route



//Listen
app.listen(process.env.PORT || 3000,()=>console.log('Server is Started'));




