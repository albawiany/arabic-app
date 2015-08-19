'use strict';
angular.module('arabicApp')
  .controller('GrammarCtrl', ['$scope','materialProvider', function ($scope, materialProvider) {

    $scope.grammar = {};
    $scope.test = "asdkfjlasdf";
    $scope.grammar.chapterOne = materialProvider.chapterOneGrammar;
    console.log($scope.grammar.chapterOne);
  }]);
