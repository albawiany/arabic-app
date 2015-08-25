'use strict';
angular.module('arabicApp')
  .controller('VocabularyCtrl', ['$scope','materialProvider','ngAudio',function ($scope, materialProvider,ngAudio) {

    $scope.vocab = {};

    $scope.vocab.chapterOne = materialProvider.chapterOneVocab;

    console.log($scope.vocab.chapterOne);
      $scope.audio = ngAudio.load("http://static1.grsites.com/archive/sounds/birds/birds007.wav");
        $scope.audio.play();
    console.log("fuck everyone");
    console.log($scope.audio);
  }]);
