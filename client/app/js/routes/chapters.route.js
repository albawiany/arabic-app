'use strict';

angular.module('arabicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chapters', {
        url: '/chapters',
        templateUrl: 'app/account/chapterNavigation.html',
        controller: 'ChapterNavigationCtrl'
      }).state('one', {
        url: '/chapters/one',
        templateUrl: 'app/account/chapters/one/one.html',
        controller: 'TodoCtrl'
      }).state('vocabulary',{
        url: '/chapters/one/vocabulary.html',
        templateUrl:'app/account/chapters/one/one-vocab.html',
        controller:'VocabularyCtrl'
      }).state('grammar',{
        url: '/chapters/one/grammar.html',
        templateUrl:'app/account/chapters/one/one-grammar.html',
        controller:'GrammarCtrl'
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
