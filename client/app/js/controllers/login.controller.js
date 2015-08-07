'use strict';

angular.module('arabicApp')
  .controller('LoginCtrl', ['$scope','Auth','$location', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    console.log('hi');

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  }]);
