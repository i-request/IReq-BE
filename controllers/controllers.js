const mongoose = require('mongoose');
mongoose.Promise = Promise;
const { Ticket, Product } = require('../models/models');


function getAllTickets(req, res, next) {
    Ticket.find()
        .then(tickets => {
            res.status(200)
            res.send(tickets)
        })
        .catch((err) => next(err))

}

function getAllProducts(req, res, next) {
    Product.find()
        .then(products => {
            res.status(200)
            res.send(products)
        })
        .catch((err) => next(err))

}

function addTicket(req, res, next) {
    console.log('called')
    console.log(req.body)
    let tix = new Ticket({
        name: req.body.ticket
    });
    tix.save()
        .then(() => {
            console.log('got here')
            return Ticket.find()
        })
        .then(tickets => {
            res.status(201);
            res.send(tickets);
        })
        .catch(err => next(err));
}






module.exports = { getAllTickets, getAllProducts, addTicket }