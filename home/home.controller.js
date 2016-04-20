var app = angular.module('todo');

app.controller("HomeCtrl", home);

app.$inject = ['$http','userService'];

function home($http) {
  var vm = this;
  vm.greeting = "Hello";
  vm.world = "World, let's write some todos";
  var factory = userService($http).getUser();
  factory.then(function(info) {
    vm.user = info.data.name;
  })
};
