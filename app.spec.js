var chai = require('chai');
var request = require('request');
var assert = chai.assert;

var app = require('./express.js')
var RANDOMIZE = 0;
var server = app.listen(RANDOMIZE);
var port = server.address().port;

describe('Todos can', function(){
  it('be returned', function(done){
    request('http://localhost:' + port + '/todos/', function(errors,response){
      assert.equal(response.statusCode,200);
      done();
    })
  })
})
