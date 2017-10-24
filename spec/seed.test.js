var mongoose = require('mongoose')
var DBs = require('../config.js').DB;
var model = require('../models/models.js')
var async = require('async')


mongoose.connect(DBs.dev, function (err) {
    if (!err) {
      mongoose.connection.db.dropDatabase();
      async.waterfall([
        addProduct,
        addTicket,
      ], function (err) {
        if (err) {
          console.log(JSON.stringify(err));
          process.exit();
        }
      
        process.exit();
      });
    } else {

      console.log(JSON.stringify(err));
      process.exit();
    }
  });

  function addProduct(done) {
    var test1 = new model.Product(
      {
        type: 'food',
        name: 'bacon sandwich',
        extras: ['tomato sauce'],
        price: 410,
        inStock: true,
        allergens: ['meat'],
      }
    );
    test1.save(function (err) {
      if (err) {
        return done(err);
      }
      return done();
    });
  }

  function addTicket(done) {
    var test1 = new model.Ticket(
      tixT
    );
    test1.save(function (err) {
      if (err) {
        return done(err);
      }
      return done();
    });
  }

  var tixT = 
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
      additional_instructions: 'none',
      user_details :[{
        id : 'e3e456y7uhtgre3456',
        user_name: "Jonathan Ward",
        email : "jonathan@forwardmarketingonline.co.uk", 
        phone_num : "01617991075", 
        user_company : "co-op", 
        user_floor : 3
      }]
    }