'use strict';
angular.module('arabicApp')
  .controller('GrammarCtrl', ['$scope','materialProvider', function ($scope, materialProvider) {

    $scope.grammar = {};
    $scope.grammar.chapterOne = materialProvider.chapterOneGrammar;

  }]);
