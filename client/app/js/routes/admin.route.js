'use strict';

angular.module('arabicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/account/admin.html',
        controller: 'AdminCtrl'
      });
  });
