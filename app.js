var app = angular.module('todo',[]);

app.controller("HomeCtrl",home);

app.$inject = ['$http'];

function home($http){
  var that = this;
  that.greeting = "Hello";
  that.world = "World";
  var user = $http.get('http://localhost:1337/user');
  user.then(function(info){
    that.user =info.data.name
  })
};

app.controller("todoController",todo);

app.$inject = ['$http'];

function todo($http) {
  var that = this;
  var todos = $http.get('http://localhost:1337/todos/Arun')
  todos.then(function(todo){
    that.list = todo.data;
  })
}
