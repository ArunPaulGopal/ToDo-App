var app = angular.module('todo',[]);
app.controller("HomeCtrl",home);
function home(){
  var that = this;
  that.greeting = "Hello";
  that.world = "World";
};
