var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = require("chai").expect;
var baseUrl = "http://localhost:8000";
var util = require("util");

describe('returns number', function() {
    it('returns counter', function(done) {
        request.get({ url: baseUrl + '/' },
            function(error, response, body) {   
              var bodyObj = JSON.parse(body);           
                    expect(response.statusCode).to.equal(500);
                    expect(bodyObj.counter).to.be.a('number');
                   
                done();
            });
    });   

    it('returns math result calulate ', function(done) {
     
      request.post('http://localhost:8000/calculate')
              .send({
                  val1: 1,
                  val2: 2,
                  cal: '+'
              })
              .expect(201)
              .end(function(err, res) {
                var bodyObj = JSON.parse(body);           
                  expect(response.statusCode).to.equal(200);
                  expect(bodyObj.result).to.equal(3);
                  done(err);
              })
    });
  });