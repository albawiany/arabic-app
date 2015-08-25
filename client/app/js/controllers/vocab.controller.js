'use strict';
angular.module('arabicApp')
  .controller('VocabularyCtrl', ['$scope','materialProvider','ngAudio',function ($scope, materialProvider,ngAudio) {

    $scope.vocab = {};

    $scope.vocab.chapterOne = materialProvider.chapterOneVocab;
  }]);
