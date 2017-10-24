const {expect} = require('chai');
const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const saveTestData = require ('./getTestData');
mongoose.Promise = Promise
process.env.NODE_ENV = 'test';



describe('API', () => {
    let baseData;
    beforeEach(() => {
        return mongoose.connection.dropDatabase()
            .then(saveTestData)
            .then(data => {
                baseData = data;
            })
            .catch(console.error);
    })
    describe('GET /', () => {
        it('returns an array of objects', () => {
            return request(app)
                .get('/')
                .expect(200)
                .then(q => {
                        expect(q.text).to.be.a('string');
                })
            });
    });
    describe('GET /tickets', () => {
        it('returns array of all tickets', () => {
            return request(app)
                .get('/tickets')
                .expect(200)
                .then(q => {
                        expect(q.body).to.be.an('array');
                        expect(q.body[0].name).to.equal(baseData.tickets[0].name);
                })
            });
    });
    describe('GET /products', () => {
        it('returns array of all products', () => {
            return request(app)
                .get('/products')
                .expect(200)
                .then(q => {
                        expect(q.body).to.be.an('array');
                        expect(q.body[0].name).to.equal(baseData.products[0].name);
                        expect(q.body[1].name).to.equal(baseData.products[1].name);
                })
            });
    });
    describe('POST /tickets', () => {
        it('adds ticket to array', () => {
            return request(app)
                .post('/tickets')
                .send({ delivery: false,
                    order_content: [
                      {
                        _id: '98uygyu7y6t5rertyu',
                        type: "food",
                        name: "super hot dog",
                        extras: [],
                        price: 700,
                        inStock: true,
                        allergens: ['meat', 'dairy', 'egg']
                      },
                      {
                        _id: '876t5rfrtyuty78jh',
                        type: "food",
                        name: "tomato and cheese panini",
                        extras: [],
                        price: 520,
                        inStock: true,
                        allergens: []
                      }],
                    message: '',
                             })
                .expect(201)
                .then(q => {
                        expect(q.body).to.be.an('array')
                        expect(q.body.length).to.equal(2);
                })
            });
    });

    describe('POST /products', () => {
        it('adds product to array', () => {
            return request(app)
                .post('/products')
                .send({
                    type: 'drink',   
                    name: 'large coke',
                    extras:[],
                    price : 490,
                    inStock:true,
                    allergens:[], 
                })
                .expect(201)
                .then(q => {
                        expect(q.body).to.be.an('array')
                        expect(q.body.length).to.equal(3);
                })
            });
    });
describe('PUT /products/:_id?inStock=false', () => {
        it('sets a product to be out of stock', () => {
            return request(app)
                .put(`/products/${baseData.products[0]._id}?inStock=false`)
                .expect(201)
                .then(q => {
                    console.log(baseData.products)
                    console.log(q.body)
                        expect(q.body.inStock).to.equal(false)
                })
            });
    });

// PUT /product/:_id?inStock=false
///PUT ticket/:_id?canceled=true
///PUT ticket/:_id?canceled=false
///PUT ticket/:_id?completed=true
///PUT ticket/:_id?completed=false
///PUT ticket/:_id?viewed=true
    

});
