'use strict';

angular.module('arabicApp')
  .controller('MainCtrl', ['$scope','$http','socket', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });


  }]);
