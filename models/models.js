var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
    type: String,   
    name: String,
    extras:[[String]],
    price : Number,
    inStock:Boolean,
    allergens:[[String]], 
});

var TicketSchema = new Schema(
  { order_num: Number,
    isComplete: Boolean,
    isViewed: Boolean,
    isCanceled:Boolean,
    delivery:Boolean,
    order_content: [],
    additional_instructions: String,
    user_details :[]
  });
 var Counter = new Schema (
   {
     name:String,
     seq:Number
   }
 ) 


const Ticket = mongoose.model('Ticket', TicketSchema)
const Product = mongoose.model('Product', ProductSchema)
const Count = mongoose.model('Count', Counter)
module.exports = {
  Ticket,
  Product,
  Count

}










