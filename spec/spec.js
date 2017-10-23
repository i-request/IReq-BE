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

});
