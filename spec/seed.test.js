var mongoose = require('mongoose')
var DBs = require('../config.js').DB;
var model = require('../models/models.js')
var async = require('async')
var testProducts = require('./products')
mongoose.Promise = Promise
var obj = {c:2}

function count(){
  obj.c = obj.c + 1
  return obj.c
  
}


var tixtix = [
  { order_num:1,
    isComplete: false,
    isViewed: false,
    isCanceled:false,
    delivery:false,
    order_content: [
      {
        _id: '98uygyu7y6t5rertyu',
        type: "food",
        name: "super hot dog",
        extras: ['cheese'],
        price: 700,
        inStock: true,
        allergens: ['meat', 'dairy', 'egg']
      },
      {
        _id: '876t5rfty78jh',
        type: "food",
        name: "ham and cheese panini",
        extras: [],
        price: 550,
        inStock: true,
        allergens: ['meat', 'dairy', 'egg']
      }],
    additional_instructions: '',
    user_details :[{
      id : 'e3e456y7uhtgre3456',
      user_name: "Jonathan Ward",
      email : "jonathan@forwardmarketingonline.co.uk", 
      phone_num : "01617991075", 
      user_company : "co-op", 
      user_floor : 3
    }]
  },
  { order_num:2,
    isComplete: false,
    isViewed: false,
    isCanceled:false,
    delivery:false,
    order_content: [
      {
        _id: '98uygyy7895rertyu',
        type: "food",
        name: "standard hot dog",
        extras: ['cheese'],
        description:'hey yo was up',
        price: 500,
        inStock: true,
        allergens: ['meat', 'dairy', 'egg']
      },
      {
        _id: '876t5rfty78jh',
        type: "food",
        name: "ham and cheese sandwich",
        description:'hey',
        extras: [],
        price: 550,
        inStock: true,
        allergens: ['meat', 'dairy', 'egg']
      }],
    additional_instructions: '',
    user_details :[{
      id : 'e3e456y7uhtgre3456',
      user_name: "Jonathan Ward",
      email : "jonathan@forwardmarketingonline.co.uk", 
      phone_num : "01617991075", 
      user_company : "co-op", 
      user_floor : 3
    }]
  }
]





mongoose.connect(DBs.dev, function (err) {
      if (!err) {
        mongoose.connection.dropDatabase()
        .then(saveTestData)
        .then(data => {
           console.log('done')
           process.exit();
        })
        .catch(console.error);
      } else {
  
        console.log(JSON.stringify(err));
        process.exit();
      }
    });



    function saveTickets() {
      const tickets = tixtix.map(t => new model.Ticket(t).save());
      return Promise.all(tickets);
    }
    
        
    function saveProducts() {
        const products = testProducts.map(p => new model.Product(p).save());
      return Promise.all(products);
    }
    
    function saveTestData() {
      return saveTickets()
         .then(tickets => {
          return saveProducts();
        })
        .then((products) => {
       
          return products
        })
    }