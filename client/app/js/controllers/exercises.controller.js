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
        "answered" : ''
      }];

    $scope.testing = function(input){
    console.log(input.toElement);
    };
    
    $scope.func3 = function(){
      console.log("func3");
    };





  }]);
