var mongoose = require('mongoose')
var DBs = require('../config.js').DB;
var model = require('../models/models.js')
var async = require('async')


mongoose.connect(DBs.dev, function (err) {
    if (!err) {
      mongoose.connection.db.dropDatabase();
      async.waterfall([
        addProduct,
        addTicket
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
        name: 'test',
        price: 1.00
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
      {
        name: 'this is also a test'
      }
    );
    test1.save(function (err) {
      if (err) {
        return done(err);
      }
      return done();
    });
  }