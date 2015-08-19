// jshint ignore: start
'use strict';


angular.module('arabicApp')
  .controller('PassagesCtrl', ['$scope','materialProvider', function ($scope, materialProvider) {

    $scope.readings = {};

    $scope.readings.Passages =  materialProvider.chapterOnePassage;

  }]);
