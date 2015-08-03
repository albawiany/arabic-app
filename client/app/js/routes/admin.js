'use strict';

angular.module('arabicAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/account/admin.html',
        controller: 'AdminCtrl'
      });
  });
