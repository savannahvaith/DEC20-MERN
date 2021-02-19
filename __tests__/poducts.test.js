'use strict';
const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp); // associate the module with chai!
const app = require('../server');
const {PRODUCT_URL} = require('../config/CONSTS.json');

describe(`A simple test `, () => {

    // does 1+1 =2 
    it.skip(`should return 2 when 1+1`, () => {
        const expression = 1+1; 
        expect(expression).to.equal(2);
    });

    it.skip("Another one", () => {
        const val = null; 
        expect(val).to.be.null;
    });
});

describe(`Product Routes`, () => {

    it(`Test /hello route`, (done) => {
        // check if the call is successful
        // app = http://localhost:5019
        chai.request(app)
            .get("/hello")
            .end((err, response) => {
                if (err) {
                    console.log(`Something went wrong!`);
                    done(err);
                }
                expect(response).to.have.status(200);
                expect(response).to.not.be.null;
                expect(response).to.have.property('text', 'hi');
                done();
            });
    });

    it(`Test /getAll route`, (done) => {
        // request is to http://localhost:5019/product/getAll
        chai.request(app)
        .get(`${PRODUCT_URL}/getAll`)
        .end((err,res) => {
            if(err) done(err);
            expect(res).to.have.status(200);
            expect(res.body).to.not.be.null;
            res.body.map((item) => expect(item).to.contain.key("_id"));
            res.body.map((item) => expect(item).to.be.a('object'));
            res.body.map((item) => expect(item._id).to.be.a('string'));
            done();
        });
    });

    it(`Test /create route`, (done) => {
        // request is to http://localhost:5019/product/create
        chai.request(app)
        .post(`${PRODUCT_URL}/create`)
        .send({'name' : 'Chocolate biscuits'})
        .end((err, response) => {
            if(err) done(err); 
            expect(err).to.be.null;
            expect(response).to.not.be.undefined;
            expect(response).to.have.status(201);
            expect(response).to.have.property('text', 'Chocolate biscuits has been added successfully!');
            done();
        });
    });

    after( () => {
        app.close();
    });

});