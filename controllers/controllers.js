const mongoose = require('mongoose');
mongoose.Promise = Promise;
const { Ticket, Product } = require('../models/models');

var obj = {c:0}

function count(){
    obj.c = obj.c + 1
    return obj.c
    
  }
// potentially change this to a Math.random()
function getAllTickets(req, res, next) {
    Ticket.find()
        .then(tickets => {
            res.status(200)
            res.send(tickets)
        })
        .catch((err) => next(err))

}
function getViewTickets(req, res, next) {
    Ticket.find()
        .then(tickets => {
            var Vt = tickets.filter(function(item){
                return item.isViewed === true
            })
            res.status(200)
            res.send(Vt)
        })
        .catch((err) => next(err))

}

function getNotCompletedTickets(req, res, next) {
    Ticket.find()
        .then(tickets => {
            var Vt = tickets.filter(function(item){
                return item.isComplete === false
            })
            res.status(200)
            res.send(Vt)
        })
        .catch((err) => next(err))

}

function getCanceledTickets(req, res, next) {
    Ticket.find()
        .then(tickets => {
            var Vt = tickets.filter(function(item){
                return item.isCanceled === true
            })
            res.status(200)
            res.send(Vt)
        })
        .catch((err) => next(err))

}
function getArchTickets(req, res, next) {
    Ticket.find()
        .then(tickets => {
            var Vt = tickets.filter(function(item){
                return item.isViewed === true && item.isComplete === true
            })
            res.status(200)
            res.send(Vt)
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
    let n = count()
    var userObj = Object.assign({},req.body.user_details)
    if (!req.body.user_details){userObj = {}}
    let tix = new Ticket(
        { order_num: n,
            isComplete: false,
            isViewed: false,
            isCanceled:false,
            delivery: req.body.delivery,
            order_content: req.body.order_content,
            additional_instructions: req.body.message,
            user_details :userObj
          }
    );
    tix.save()
        .then(() => {
           
            return Ticket.find()
        })
        .then(tickets => {
            res.status(201);
            res.send(tickets);
        })
        .catch(err => next(err));
}


function addProduct(req, res, next) {
    
    let pro = new Product(
        {
            type: req.body.type,   
            name: req.body.name,
            extras:req.body.extras,
            imgUrl: req.body.imgUrl,
            temperature:req.body.temperature,
            price : req.body.price,
            inStock:req.body.inStock,
            allergens:req.body.allergens, 
        }
    );
    pro.save()
        .then(() => {
         
            return Product.find()
        })
        .then(products => {
            res.status(201);
            res.send(products);
        })
        .catch(err => next(err));
}


function ChangeProductProp(req,res,next){
    var key = Object.keys(req.query)[0]
    var boo = ''
    if(req.query[key] === 'true'){boo = true}
   else if(req.query[key] === 'false'){boo = false}
   else {boo = req.query[key]}
    var obj = {[key]:boo}
   return Product.findByIdAndUpdate({_id:req.params._id},{$set:obj})
    .then(() => {
        return Product.findById(req.params._id);
    })
    .then(p => {
        res.status(201);
        res.send(p);
    })
    .catch(err => {
        if(err.name === 'CastError'){
        next({err: err, type: 'CastError'})    
        }
        else {
            next(err)
        }
    });
}


function ChangeTicketProp(req,res,next){
    var key = Object.keys(req.query)[0]
   
    var boo = ''
    if(req.query[key] === 'true'){boo = true}
    if(req.query[key] === 'false'){boo = false}
    var obj = {[key]:boo}
    
    return Ticket.findByIdAndUpdate({_id:req.params._id},{$set:obj})
    .then(() => {
       
        return Ticket.findById(req.params._id);
    })
    .then(t => {
        res.status(201);
        res.send(t);
    })
    .catch(err => {
        if(err.name === 'CastError'){
        next({err: err, type: 'CastError'})    
        }
        else {
            next(err)
        }
    });
}






module.exports = { getAllTickets, getCanceledTickets, getArchTickets, getViewTickets, getNotCompletedTickets, getAllProducts, addTicket, addProduct,ChangeProductProp, ChangeTicketProp}