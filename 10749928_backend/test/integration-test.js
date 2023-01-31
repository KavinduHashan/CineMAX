const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const server = require('../server');

// user
describe('------- Testing User -------', () => {

    // login testing
    describe('User Login :', () => {
        let logingData = {
            username: 'user',
            password: '123'
          };         
        it('TEST: POST -> /user/login', done => {
            request(server.app)
              .post('/user/login')
              .send(logingData)
              .expect(200)
              .end((err, res) => {
                if (err) {
                  return done(err);
                }
                expect(res.status).to.equal(200);
                done();
              });
          }); 
    });

    // register testing
    describe('User Registration :', () => {
        let signupdata = {
            name: 'Rayan',
            address: 'negombo',
            email: 'Rayan@gmail.com',
            mobile: '0786543212',
            username: 'rayan',
            password: '12345'
          };
        it('TEST: POST -> /user/create', (done) => {
          request(server.app)
            .post('/user/create')
            .send(signupdata)
            .expect(200)
            .end(done);
        });
      });

    // getAll user testing
    describe('User getAll :', () => {          
        it('TEST: GET -> /user/getAll', done => {
            request(server.app)
              .get('/user/getAll')
              .expect(200)
              .end((err, res) => {
                if (err) {
                  return done(err);
                }
                expect(res.status).to.equal(200);
                done();
              });
          }); 
    });
});

// feedback
describe('------- Testing Feedback -------', () => {
    // feedback send testing
    describe('Feedback :', () => {
        let fb = {
            feedback: 'Good',
          };
          
        it('TEST: POST -> /userfeedback/create', done => {
            request(server.app)
              .post('/userfeedback/create')
              .send(fb)
              .expect(200)
              .end((err, res) => {
                if (err) {
                  return done(err);
                }
                expect(res.status).to.equal(200);
                done();
              });
          }); 
    });

    // getAll feedback testing
    describe('Feedback getAll :', () => {          
        it('TEST: GET -> /userfeedback/getAll', done => {
            request(server.app)
              .get('/userfeedback/getAll')
              .expect(200)
              .end((err, res) => {
                if (err) {
                  return done(err);
                }
                expect(res.status).to.equal(200);
                done();
              });
          }); 
    });

});