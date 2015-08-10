// jshint ignore: start
'use strict';


angular.module('arabicApp')
  .controller('ExercisesCtrl', ['$scope','$window', function ($scope,$window) {

    $scope.exercises = {};

    $scope.exercises.quizQuestions =
      [{
        "question": "ما كان ابن بطوطة",
        "option1": "رحالة",
        "option2": "دكتور",
        "option3": "عصكري",
        "correct" : "1",
        "answered" : [],
        "bool" : 1,
        "status" : 'this is just a test'
      },
        {
          "question": "ما كان ابن بطوطة",
          "option1": "رحالة",
          "option2": "دكتور",
          "option3": "عصكري",
          "correct" : "1",
          "answered" : [],
          "bool" : 0,
          "status" : 'indeed it is'
        }];

  }]);
