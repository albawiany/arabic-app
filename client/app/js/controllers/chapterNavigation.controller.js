// jshint ignore: start
'use strict';


angular.module('arabicApp')
  .controller('ChapterNavigationCtrl', ['$scope', 'chapterNavigation',function ($scope, chapterNavigation) {

    $scope.chapterOne = chapterNavigation.chapterOne;
    console.log($scope.chapterOne);
  }]);
