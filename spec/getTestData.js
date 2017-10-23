const { Ticket,Product } = require('../models/models');
const savedData = {};


function saveTickets() {
  const tickets = [
    { name:'initial'},
    { name: 'D'}
  ].map(t => new Ticket(t).save());
  return Promise.all(tickets);
}

function saveProducts() {
    const products = [
        { name: 'hello', price:1},
        { name: 'test', price:2}
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