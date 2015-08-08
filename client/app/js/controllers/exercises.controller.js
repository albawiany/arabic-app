// jshint ignore: start
'use strict';


angular.module('arabicApp')
  .controller('ExercisesCtrl',['$scope','$http', function ($scope,$http) {

    $scope.exercises = {};


    $scope.readings = [{
      "unit" : 1,
      "title" : 'ابن بطوطة و رحلة في التاريخ',
      "content" : ''
    }];

    $scope.exercises.quizQuestions =
    [{
        "question": "What is this",
        "option1": "A",
        "option2": "B",
        "option3": "C"
      }, {
      "question": "What is here",
      "option1": "A",
      "option2": "B",
      "option3": "C"
      }, {
      "question": "Wht is there",
      "option1": "A",
      "option2": "B",
      "option3": "C"
      }];

    }]);
