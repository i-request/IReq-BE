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
                    console.log(q.body)
                        expect(q.body).to.be.an('array');
                        expect(q.body[0]._id.toString()).to.equal(baseData.tickets[0]._id.toString());
                        expect(q.body[0].name).to.equal(baseData.tickets[0].name);
                        expect(q.body[1].name).to.equal(baseData.tickets[1].name);
                })
            });
    });

});
