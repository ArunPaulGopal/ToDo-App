var app = angular.module('todo', []);

app.controller("HomeCtrl",home);

app.$inject = ['$http'];

function home($http){
  var vm = this;
  vm.greeting = "Hello";
  vm.world = "World";
  var user = $http.get('http://localhost:1337/user');
  user.then(function(info){
    vm.user =info.data.name
  })
};

app.controller("todoController", todo);

app.$inject = ['$http'];

function todo($http) {
  var vm = this;

  function activate() {
    getTodos()
  }
  activate();

  function getTodos() {
    var todos = $http.get('http://localhost:1337/read')
    todos.then(function(todo){
      vm.list = todo.data;
    })
  }

  vm.finished = function(item) {
    var position = vm.list.indexOf(item);
    vm.list.splice(position,1);
  }

  vm.add = function(content) {
    var todo = {};
    todo.content = content;
    var added = $http.post('http://localhost:1337/create', todo);
    added.then(function(){
      getTodos()
    })
  }

  vm.delete = function(item) {
    var todelete = {};
    todelete.content = item
    var deleted = $http.post('http://localhost:1337/delete', todelete);
    deleted.then(function(){
      getTodos();
    })
  }
}
