//Require Modules
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/test';
var jsonParser = require('body-parser').json();
//Routes
app.use(express.static('./'));
app.get('/user', function(req, res) {
  var user = {
    name: "Arun",
    location: "Costa Mesa"
  }
  res.json(user);
});
app.get('/read', function(req, res, callback) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      var todos = db.collection('todos');
      todos.find().toArray(function(err, docs){
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
app.post('/delete', jsonParser, function(req, res){
  MongoClient.connect(url, function(err, db) {
    if (!err){
      db.collection('todos').deleteMany(
        {
          text: req.body.content
        }
      );
      db.close();
      res.send();
    } else {
      res.sendStatus(404);
    }
  })
})
app.listen(1337);
