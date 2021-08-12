//Require the dev-dependencies
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index';
import { cats, sharks } from '../src/db/images';

// Configure chai
chai.use(chaiHttp);
chai.should();

//Our parent block
describe('ImageRouter', () => {
  //test GET url route
  describe('/GET url', () => {
    it('it should return cat images ', (done) => {
      chai
        .request(app)
        .get('/api/images/url?types=cats')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('images').include(...cats);
          done();
        });
    });
    it('it should return shark images ', (done) => {
      chai
        .request(app)
        .get('/api/images/url?types=sharks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('images').include(...sharks);
          done();
        });
    });
    it('it should return all images ', (done) => {
      chai
        .request(app)
        .get('/api/images/url?types=cats,sharks')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('images').include(...sharks);
          res.body.should.have.property('images').include(...cats);
          done();
        });
    });
    it('it should return no images for wrong type', (done) => {
      chai
        .request(app)
        .get('/api/images/url?types=catt')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('images').eql([]);
          done();
        });
    });
    it('it should return no images for no types', (done) => {
      chai
        .request(app)
        .get('/api/images/url?types=')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('images').eql([]);
          done();
        });
    });
    it('it should return an error ', (done) => {
      chai
        .request(app)
        .get('/api/images/url')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('msg');
          done();
        });
    });
  });
});
