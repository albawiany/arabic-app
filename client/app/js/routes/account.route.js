'use strict';

angular.module('arabicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login.html',
        controller: 'LoginCtrl'
      }).state('todo', {
          url: '/todo',
          templateUrl: 'app/account/todo.html',
          controller: 'TodoCtrl'
        }).state('exercises',{
        url: '/exercises',
        templateUrl:'app/account/exercises.html',
        controller:'ExercisesCtrl'
      }).state('passages',{
        url: '/passages',
        templateUrl:'app/account/passages.html',
        controller:'PassagesCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      });
  });
