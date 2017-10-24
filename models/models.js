var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require("mongodb-autoincrement");
var optionalOptions = {
  collection: 'tickets',
  field: 'order_num',
  step: 1
}


const counter = function () {
  let c = 0
return function(){
  c++
  return c
  
}

}



var ProductSchema = new Schema({
  type: String,
  name: String,
  extras: [[String]],
  price: Number,
  inStock: Boolean,
  allergens: [[String]],
});

var TicketSchema = new Schema(
  {
    order_num: {
      type: Number
    },
    isComplete: Boolean,
    isViewed: Boolean,
    isCanceled: Boolean,
    delivery: Boolean,
    order_content: [],
    additional_instructions: String,
    user_details: []
  });



const Ticket = mongoose.model('Ticket', TicketSchema)
const Product = mongoose.model('Product', ProductSchema)

module.exports = {
  Ticket,
  Product,

}









