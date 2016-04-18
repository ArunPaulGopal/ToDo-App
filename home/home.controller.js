var app = angular.module('todo');

app.controller("HomeCtrl", home);

app.$inject = ['$http'];

function home($http) {
  var vm = this;
  vm.greeting = "Hello";
  vm.world = "World";
  var user = $http.get('http://localhost:1337/user');
  user.then(function(info) {
    vm.user = info.data.name;
  })
};
