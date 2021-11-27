/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');
const dbBuilder = require('../src/config/dbBuild');
const { sequelize } = require('../src/config/connection');

beforeEach(() => dbBuilder());

describe('Sign in test with status code 201', () => {
  test('Sign in test with status code 201', (done) => {
    request(app)
      .post('/api/signIn')
      .send({ email: 'test3@gmail.com', password: '123456789' })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});

afterAll(() => sequelize.close());
