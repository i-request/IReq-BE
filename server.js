if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config');
var db = config.DB[process.env.NODE_ENV] || process.env.DB;
mongoose.Promise = Promise;
var ticketsRouter = require('./routes/tickets')
var productsRouter = require('./routes/products')
var cors = require('cors')
var k = require ('./stripe.js')
//^ this variable is from a stripe config file, secret keys should not be on github 
var stripe = require('stripe')(k);
const { Ticket, Product } = require('./models/models');


var express = require('express');
var app = express();
var path = require('path');

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.emit('introduction', 'hello from 9007');
 
});



mongoose.connect(db, {useMongoClient: true})
.then(() => console.log('successfully connected to', db))
.catch(err => console.log('connection failed', err));




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(cors())

app.post('/tickets',addTicket)


app.use('/tickets', ticketsRouter)
app.use('/products', productsRouter)

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



function addTicket(req, res, next) {
  let n = count()
  let tix = new Ticket(
      { order_num: n,
          isComplete: false,
          isViewed: false,
          isCanceled:false,
          delivery: req.body.delivery,
          order_content: req.body.order_content,
          additional_instructions: req.body.message,
          user_details :[{
            id : 'e3e456y7uhtgre3456',
            user_name: "Jonathan Ward",
            email : "jonathan@forwardmarketingonline.co.uk", 
            phone_num : "01617991075", 
            user_company : "co-op", 
            user_floor : 3
          }]
        }
  );
  tix.save()
      .then(() => {
         
          return Ticket.findOne({order_num:n})
      })
      .then(ti => {
        io.emit('ticket',ti)
          res.status(201);
          res.send(ti);
      })
      .catch(err => next(err));
}
var obj = {c:2}
function count(){
  obj.c = obj.c + 1
  return obj.c
  
}


// server.listen(9007, function () {
//   console.log('Server listening at port 9007');
// });


module.exports = app;




