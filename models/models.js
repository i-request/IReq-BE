var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
    name: {
      type: String
    },
    price:
    {type:Number}
  });

var TicketSchema = new Schema({
    name: {
      type: String
    }

  }); 


//collections needed :
// products
// tickets


const Ticket = mongoose.model('Ticket', TicketSchema)
const Product = mongoose.model('Product', ProductSchema)
module.exports = {
    Ticket,
    Product

}