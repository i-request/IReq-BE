var mongoose = require('mongoose')
var DBs = require('../config.js').DB;
var model = require('../models/models.js')
var async = require('async')


mongoose.connect(DBs.dev, function (err) {
    if (!err) {
      mongoose.connection.db.dropDatabase();
      async.waterfall([
        addProduct,
        addTicket1,
        addTicket2
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

  function addTicket1(done) {
    var test1 = new model.Ticket(
      tixT1
    );
    test1.save(function (err) {
      if (err) {
        return done(err);
      }
      return done();
    });
  }

  function addTicket2(done) {
    var test1 = new model.Ticket(
      tixT2
    );
    test1.save(function (err) {
      if (err) {
        return done(err);
      }
      return done();
    });
  }

  var tixT1 = 
    { order_num:2,
      isComplete: false,
      isViewed: false,
      isCanceled:false,
      delivery:false,
      order_content: [
        {
          _id: '1',
          type: "food",
          name: "super hot dog",
          extras: ['cheese'],
          price: 700,
          inStock: true,
          allergens: ['meat', 'dairy', 'egg']
        },
        {
          _id: '2',
          type: "food",
          name: "ham and cheese panini",
          extras: [],
          price: 550,
          inStock: true,
          allergens: ['meat', 'dairy', 'egg']
        }],
      additional_instructions: 'none',
      user_details :[{
        id : 'uhtgre3456',
        user_name: "Jonathan Ward",
        email : "jonathan@forwardmarketingonline.co.uk", 
        phone_num : "01617991075", 
        user_company : "co-op", 
        user_floor : 3
      }]
    }

    var tixT2 = 
    { order_num:1,
      isComplete: false,
      isViewed: false,
      isCanceled:false,
      delivery:false,
      order_content: [
        {
          _id: '4',
          type: "food",
          name: "standard hot dog",
          extras: ['cheese'],
          price: 700,
          inStock: true,
          allergens: ['meat', 'dairy', 'egg']
        }],
      additional_instructions: 'no bun',
      user_details :[{
        id : '5',
        user_name: "Jonathan Ward",
        email : "jonathan@forwardmarketingonline.co.uk", 
        phone_num : "01617991075", 
        user_company : "co-op", 
        user_floor : 3
      }]
    }