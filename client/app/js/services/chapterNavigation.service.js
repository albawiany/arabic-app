angular.module('chapterNavigation', [])
  .factory('chapterNavigation', [function () {
    'use strict';
    var chapterNavigation= {
      chapterOne: {
        chapter: 1,
        title: 'ابن بطوطة و اطول رحلة في التاريخ',
        vocabUrl: '/chapters/one/vocabulary.html',
        grammarUrl: '/chapters/one/grammar.html',
        exercisesUrl:'/chapters/one/exercises.html',
        passagesUrl:'/chapters/one/passages.html'

      }
    };
    return chapterNavigation;
  }])
  .directive('insertChapter', function () {
    'use strict';
    return {
      restrict: 'E',
      scope: {
        chapterInformation: '='
      },
      link: function(scope){
        scope.grammar = "قواعد";
        scope.vocab = "مفردات";
        scope.exercises= "تمارين";
        scope.passages= 'ابن بطوطة و رحلة في التاريخ';
      },
      template:
      '<div class="chapter">' +
      '<div  class="header">{{chapterInformation.title}}' +
      '<div class="link" ><a ng-href="{{chapterInformation.vocabUrl}}">{{vocab}}</a></div>' +
      '<div class="link" ><a ng-href="{{chapterInformation.passagesUrl}}">{{passages}}</a></div>' +
      '<div class="link" ><a ng-href="{{chapterInformation.exercisesUrl}}">{{exercises}}</a></div>' +
      '<div class="link" ><a ng-href="{{chapterInformation.grammarUrl}}">{{grammar}}</a></div>' +
      '</div>'+
      '</div>'
    };
  });
