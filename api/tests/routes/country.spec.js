/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});

describe('Ruta Post', () => {
    before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    describe('POST /countries', () => {
      it('responds with 200', () => agent.post('/countries').expect(200))
      it('should return the detail of the country', (done) => 
        agent.post('/countries')
        .send({
          paises: ["ARG","CHI"],
          name: "surf",
          level: "3",
          duration: 30,
          temp: "Invierno"
          })
          .then(function(res){
            expect(res.body).to.deep.equal({
            paises: ["ARG", "CHI"],
            name: "surf",
            level: "3",
            duration: 30,
            temp: "Invierno"
            })
    }))
  })})
