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
var k = require ('./stripe.js')
//^ this variable is from a stripe config file, secret keys should not be on github 
var stripe = require('stripe')(k);




mongoose.connect(db, {useMongoClient: true})
.then(() => console.log('successfully connected to', db))
.catch(err => console.log('connection failed', err));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors())

app.get('/',function(req,res){
    res.send('hey yo what\'s up')
    })
app.get('/payment', (req, res) => {
      res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
    });



app.post('/payment', (req, res) => {
  let description=req.body.description
  let amount=req.body.amount
  let source=req.body.source
  let currency=req.body.currency
  var toCharge = {
    description,
    amount,
    source,
    currency
  }
stripe.charges.create(toCharge, function(err, charge){
    if(err && err.type === 'StripeCardError'){
      console.log('card declined')
      res.send({
        message:'card declined',
        error:err,
        bool:false
    })
    }
    else{
      console.log('payment receieved')
      res.send({
        message:'payment recieved',
        charge:charge,
        bool:true
      })
    }
  });
})


app.post("/charge", (req, res) => {
  let amount = 500;

  stripe.customers.create({
    email: req.body.email,
    card: req.body.id
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
      currency: "usd",
      customer: customer.id
    }))
  .then(charge => res.send(charge))
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({error: "Purchase Failed"});
  });
});

  




module.exports = app;




