var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/test';
var jsonParser = require('body-parser').json();

app.use(express.static('./'));

app.get('/user', function(req, res) {
  var user = {
    name: "Arun",
    location: "Costa Mesa"
  }
  res.json(user);
});

app.get('/read', function(req, res,callback) {
  console.log("GET ME!!");
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var todos = db.collection('todos');
      todos.find().toArray(function(err,docs){
        console.log("this find ran");
        var myArray =[];
        for (var i=0; i<docs.length; i++) {
          myArray.push(docs[i].text)
        }
        res.send(myArray);
      })
    } else {
      res.sendStatus(404);
    }
  })
});

app.post('/create', jsonParser, function(req, res) {
  console.log("I have been hit!");
  console.log(req.body);
  MongoClient.connect(url, function(err, db) {
    if (!err){
      db.collection('todos').insert(
        {
          text:req.body.content
        }
      );
      db.close();
      res.send();
    } else {
      res.sendStatus(404);
    }
  })
});

app.listen(1337);
if(!require.main.loaded){
  var server = app.listen(1337);
}
module.exports = app
