var chai = require('chai');
var request = require('request');
var assert = chai.assert;

var app = require('./express.js')
var RANDOMIZE = 0;
var server = app.listen(RANDOMIZE);
var port = server.address().port;

describe('Todos can', function(){
  it('be read', function(done){
    request('http://localhost:' + port + '/read/', function(errors,response){
      assert.equal(response.statusCode,200);
      done();
    })
  })
  it('be added', function(done){
    request('http://localhost:' + port + '/create/', function(errors,response){
      assert.equal(response.statusCode,200);
      done();
    })
  })
})
