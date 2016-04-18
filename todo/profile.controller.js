var app = angular.module('todo');

app.controller("profileController", profile);

function profile() {
  var vm = this;
  vm.message = "Welcome to your Profile!"
}
