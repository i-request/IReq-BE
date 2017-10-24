const { Ticket,Product } = require('../models/models');
const savedData = {};


function saveTickets() {
  const tickets = [
    { order_num: 1,
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
    }
  ].map(t => new Ticket(t).save());
  return Promise.all(tickets);
}

function saveProducts() {
    const products = [
      {
        type: 'food',   
        name: 'super hot dog',
        extras:[],
        price : 700,
        inStock:true,
        allergens:['meat','dairy', 'eggs'], 
    },
    {
      type: 'drink',   
      name: 'small black coffee',
      extras:[],
      price : 200,
      inStock:true,
      allergens:[], 
  }
  ].map(p => new Product(p).save());
  return Promise.all(products);
}

function saveTestData() {
  return saveTickets()
     .then(tickets => {
      savedData.tickets = tickets;
      return saveProducts();
    })
    .then((products) => {
      savedData.products = products;
      return savedData;
    });
}

module.exports = saveTestData;


