'use strict';
angular.module('arabicApp')
  .controller('VocabularyCtrl', ['$scope','materialProvider',function ($scope, materialProvider) {

    $scope.vocab = {};

    $scope.vocab.chapterOne = materialProvider.chapterOneVocab;

    console.log($scope.vocab.chapterOne);
  }]);
