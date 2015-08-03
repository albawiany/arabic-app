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
