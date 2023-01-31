const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('../server');

describe('Login', () => {
    let logingData = {
        username: 'user',
        password: '123'
      };
      
      it('/api/users', done => {
        request(app)
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
