if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var db = config.DB[process.env.NODE_ENV] || process.env.DB;
mongoose.Promise = Promise;


//routes needed (for now anyway) 
//get all products
//get all tickets
//post ticket


app.get('/',function(req,res){
    res.send('hey yo what\'s up')
    })
    

module.exports = app;