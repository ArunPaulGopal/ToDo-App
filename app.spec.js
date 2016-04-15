var chai = require('chai');
var request = require('request');
var assert = chai.assert;

var app = require('./app.js')
var RANDOMIZE = 0;
var server = app.list(RANDOMIZE);
var port = server.address().port;

describe('Todos can', function(){
  it('be returned', function(done){
    request('http://localhost:' + port + '/todos/', function(errors,response){
      assert.equal(response.statusCode,200);
      done();
    })
  })
})
