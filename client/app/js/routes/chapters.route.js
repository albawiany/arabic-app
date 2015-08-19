'use strict';

angular.module('arabicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('one', {
        url: '/chapters/one',
        templateUrl: 'app/account/chapters/one/one.html',
        controller: 'TodoCtrl'
      }).state('exercises',{
        url: '/chapters/one/exercises.html',
        templateUrl:'app/account/chapters/one/one-exercises.html',
        controller:'ExercisesCtrl'
      }).state('passages',{
        url: '/chapters/one/passages.html',
        templateUrl:'app/account/chapters/one/one-passages.html',
        controller:'PassagesCtrl'
      });
  });
