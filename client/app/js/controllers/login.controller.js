'use strict';
angular.module('arabicApp')
  .controller('LoginCtrl', ['$scope','Auth','$location','$window', function ($scope, Auth, $location,$window) {
    $scope.user = {};
    $scope.errors = {};

    $scope.redirectToSignup = function() {
      $window.location.href = '/signup';
    };
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
