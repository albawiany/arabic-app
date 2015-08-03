'use strict';

angular.module('arabicAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/account/main.html',
        controller: 'MainCtrl'
      });
  });
