if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var db = config.DB[process.env.NODE_ENV] || process.env.DB;
mongoose.Promise = Promise;
var ticketsRouter = require('./routes/tickets')
var productsRouter = require('./routes/products')
var cors = require('cors')

mongoose.connect(db, {useMongoClient: true})
.then(() => console.log('successfully connected to', db))
.catch(err => console.log('connection failed', err));

app.use(bodyParser.json())

app.use(cors())

app.get('/',function(req,res){
    res.send('hey yo what\'s up')
    })

 app.use('/products',productsRouter)
 app.use('/tickets',ticketsRouter) 
 app.use('/*', (req, res, next) => {
    res.status(404);
    res.send({msg: 'Page not found'});
  })
  app.use((err, req, res, next) => {
    if(err.type === 'CastError') {
      res.status(404);
      res.send({msg: 'Page not found'});
    }
    else {
      res.status(500);
      res.send({msg: err});
    }
  });
///DELETE product/:id/ 
///POST /product
// PUT /product/:id?inStock=false

///PUT ticket/:id?canceled=true
///PUT ticket/:id?canceled=false
///PUT ticket/:id?completed=true
///PUT ticket/:id?completed=false
///PUT ticket/:id?viewed=true

// PUT /product/:id{key}={whatever}

module.exports = app;