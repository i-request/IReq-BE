const mongoose = require('mongoose');
mongoose.Promise = Promise;
const {Ticket, Product } = require('../models/models');

function getAllTickets(req, res,next){
    Ticket.find()
    .then(tickets =>{
        res.status(200)
        res.send(tickets)
    })
    .catch((err)=> next(err))

}



module.exports = {getAllTickets}