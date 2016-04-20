var app = angular.module('todo');

app.factory('userService', userService);

userService.$inject = ['$http'];

function userService($http) {
  function getUser() {
    return $http.get('http://localhost:1337/user')
  }
  return {
    getUser: getUser
  }
}
