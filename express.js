var express = require('express');
var app = express();

app.use(express.static('./'));

app.get('/user', function(req, res) {
  var user = {
    name: "Arun",
    location: "Costa Mesa"
  }
  res.json(user);
});

app.get('/todos/:user', function(req, res) {
  if (req.params.user === "Arun") {
    var todos = ['Learn JS','Go Home','Try to conquer the world'];
    res.send(todos);
  } else {
    res.sendStatus(404);
  }

});


app.listen(1337);
