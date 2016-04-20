var app = angular.module('todo');

app.controller("HomeCtrl", home);

app.$inject = ['$http','userService'];

function home($http,userService) {
  var vm = this;
  vm.greeting = "Let's write some todos";
  var factory = userService.getUser();
  factory.then(function(info) {
    vm.user = info.data.name;
  })
};
