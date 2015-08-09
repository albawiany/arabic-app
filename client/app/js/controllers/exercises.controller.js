// jshint ignore: start
'use strict';


angular.module('arabicApp')
  .controller('ExercisesCtrl', ['$scope','arabicProvider', function ($scope,arabicProvider) {

    $scope.exercises = {};


    $scope.exercises.quizQuestions =
      [{
        "question": "ما كان ابن بطوطة",
        "option1": "رحالة",
        "option2": "دكتور",
        "option3": "عصكري",
        "correct" : "1"
      }];


  }]);
