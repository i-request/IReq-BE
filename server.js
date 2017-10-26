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
var stripe = require('stripe')('STRIPE_SECRET_KEY');




mongoose.connect(db, {useMongoClient: true})
.then(() => console.log('successfully connected to', db))
.catch(err => console.log('connection failed', err));

app.use(bodyParser.json())

app.use(cors())

app.get('/',function(req,res){
    res.send('hey yo what\'s up')
    })
app.get('/payment', (req, res) => {
      res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
    });
app.post('/payment', (req, res) => {
  let description=req.boyd.description
  let amount=req.body.amount
  let source=req.body.source
  let currency=req.body.currency
  var toCharge = {
    description,
    amount,
    source,
    currency
  }
  var charge = stripe.charges.create(toCharge, function(err, charge){
    if(err && err.type === 'StripeCardError'){
      console.log('card declined')
      res.send({
        message:'card declined',
        bool:false
    })
    }
    else{
      console.log('payment receieved')
      res.send({
        message:'payment recieved',
        bool:true
      })
    }
  });
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


module.exports = app;





const paymentApi = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};