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
          myArray.push(docs[i].data)
        }
        db.close();
        res.send(myArray);
      })
    } else {
      db.close();
      res.sendStatus(404);
    }
  })
});
app.post('/create', jsonParser, function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      db.collection('todos').insert(
        {
          data: {
            text: req.body.content,
            date: req.body.date
          }
        }
      );
      db.close();
      res.send();
    } else {
      db.close();
      res.sendStatus(404);
    }
  })
});
app.post('/delete', jsonParser, function(req, res) {
  MongoClient.connect(url, function(err, db) {
    if (!err){
      db.collection('todos').deleteMany(
        {
          data: {
            text: req.body.content,
            date: req.body.date
          }
        }
      );
      db.close();
      res.send();
    } else {
      db.close();
      res.sendStatus(404);
    }
  })
})
if(!require.main.loaded){
  var server = app.listen(1337);
}
module.exports = app
