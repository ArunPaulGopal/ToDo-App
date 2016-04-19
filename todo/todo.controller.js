var app = angular.module('todo');

app.controller("todoController", todo);

app.$inject = ['$http'];

function todo($http) {
  var vm = this;

  function activate() {
    getTodos();
  }
  activate();

  function getTodos() {
    var todos = $http.get('http://localhost:1337/read');
    todos.then(function(todo){
      vm.list = todo.data;
    })
  }

  vm.finished = function(item) {
    var position = vm.list.indexOf(item);
    vm.list.splice(position,1);
  }

  vm.add = function(content,date) {
    var todo = {};
    todo.content = content;
    todo.date = date;
    var added = $http.post('http://localhost:1337/create', todo);
    added.then(function() {
      getTodos();
    })
  }

  vm.delete = function(item) {
    var todelete = {};
    todelete.content = item.text;
    todelete.date = item.date;
    var deleted = $http.post('http://localhost:1337/delete', todelete);
    deleted.then(function() {
      getTodos();
    })
  }
}
