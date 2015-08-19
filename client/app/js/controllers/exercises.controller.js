// jshint ignore: start
'use strict';


angular.module('arabicApp')
  .controller('ExercisesCtrl', ['$scope','materialProvider', function ($scope,materialProvider) {

    $scope.exercises = {};

    $scope.exercises.quizQuestions = materialProvider.chapterOneExercises;

  }]);
