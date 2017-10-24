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
    let tix = new Ticket(
        { order_num: 777,
            isComplete: false,
            isViewed: false,
            isCanceled:false,
            delivery: req.body.delivery,
            order_content: req.body.order_content,
            additional_instructions: req.body.message,
            user_details :[{
              id : 'e3e456y7uhtgre3456',
              user_name: "Jonathan Ward",
              email : "jonathan@forwardmarketingonline.co.uk", 
              phone_num : "01617991075", 
              user_company : "co-op", 
              user_floor : 3
            }]
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
            price : req.body.price,
            inStock:req.body.inStock,
            allergens:req.body.allergens, 
        }
    );
    pro.save()
        .then(() => {
            console.log('got here')
            return Product.find()
        })
        .then(products => {
            res.status(201);
            res.send(products);
        })
        .catch(err => next(err));
}


function ChangeProductStock(req,res,next){
    Product.findByIdAndUpdate({_id:req.params._id},{$set:{inStock:req.query.inStock}})
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
    console.log(key)
    var boo = ''
    if(req.query[key] === 'true'){boo = true}
    if(req.query[key] === 'false'){boo = false}
    var obj = {[key]:boo}
    console.log(obj)
    return Ticket.findByIdAndUpdate({_id:req.params._id},{$set:obj})
    .then(() => {
        console.log
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






module.exports = { getAllTickets, getAllProducts, addTicket, addProduct,ChangeProductStock, ChangeTicketProp}