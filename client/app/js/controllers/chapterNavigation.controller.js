// jshint ignore: start
'use strict';


angular.module('arabicApp')
  .controller('ChapterNavigationCtrl', ['$scope', 'chapterNavigation',function ($scope, chapterNavigation) {

    $scope.chapters = {};
    $scope.chapters.chapterOne = chapterNavigation.chapterOne;
  }]);
