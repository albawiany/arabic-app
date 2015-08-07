'use strict';

angular.module('arabicApp')
  .controller('ExercisesCtrl',['$scope',function ($scope) {

    $scope.exercises = {};

    console.log('Hey does this work?');


    $scope.exercises.quizQuestions = [
      {
        question : 'How big is the moon?',
        option1 : '',
        option2 : '',
        option3 : '',
        correct : ''
      }
    ];








  }]);



