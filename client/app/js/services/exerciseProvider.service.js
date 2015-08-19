angular.module('exerciseProvider', [])
  .factory('exerciseProvider', [function () {
    'use strict';
    var exerciseProvider = {};
    return exerciseProvider;
  }])
  .directive('insertPassage', function () {
    'use strict';
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.passageArray = JSON.parse(attrs.passageArray);
      },
      template: '<div  class="passage-box-container" ng-repeat="n in passageArray track by $index">' +
      '<div class="passage-box">' +
      '<div class="unit-title"><ul>{{n.unit}}</ul></div>' +
      '<div class="passage-title">{{n.title}}</div>' +
      '<div class="passage-text">{{n.content}}</div>' +
      '</div>' +
      '</div>'
    };
  })
  .directive('insertExcerises', function ($timeout) {
    'use strict';
    return {
      restrict: 'E',
      scope: {
        questionArray: '='
      },
      link: function (scope) {

        scope.answerTheQuestion = function (input, answer) {

          if (scope.$parent.exercises) {
            scope.$parent.exercises.quizQuestions[input].answered.push(answer);
            if (scope.$parent.exercises.quizQuestions[input].correct === answer) {
              scope.$parent.exercises.quizQuestions[input].status = 'Correct';
            } else {
              scope.$parent.exercises.quizQuestions[input].status = 'Incorrect';
            }
          }
          $timeout(function () {
            scope.$parent.exercises.quizQuestions[input].status = '';
          }, 3000);
        };
      },
      template: '<div ng-repeat="n in questionArray track by $index">' +
      '<div class="question">{{n.question}}' +
      '<div class="option" ng-click="answerTheQuestion($index,0)">{{n.option1}}</div>' +
      '<div class="option" ng-click="answerTheQuestion($index,1)">{{n.option2}}</div>' +
      '<div class="option" ng-click="answerTheQuestion($index,2)">{{n.option3}}</div>' +
      '<div ng-show="n.status" class="status-message"> {{n.status}}</div>' +
      '</div>' + '</div>'
    };
  });

