'use strict';

angular.module('arabicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/account/main.html',
        controller: 'MainCtrl'
      });
  });
