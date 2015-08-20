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
  })
  .directive('insertVocabulary', function () {
  'use strict';
  return {
    restrict: 'E',
    scope: {
      vocab: '='
    },
    template:
    '<div class="vocab-item" ng-repeat="item in vocab track by $index">' +
    '<div  class="word"> {{item.word}}</div> ' +
    '<div class="meaning">{{item.meaning}}</div>' +
    '<div class="info" ng-show="!item.conjugationPresent" >{{item.plural}}</div>' +
    '<div class="info" ng-show="item.conjugationPresent" >{{item.conjugationPresent}} </div>' +
    '<div class="info" ng-show="item.conjugationPresent">{{item.conjugationPast}} </div>' +
    '<div class="examples" ng-repeat="example in item.examples">{{example}} </div>' +
    '</div>'
  };
}).directive('insertGrammar', function () {
    'use strict';
    return {
      restrict: 'E',
      scope: {
        grammar: '='
      },
      template:
      '<div class="grammar">' +
      '<div class="title" >{{grammar.title}}</div>' +
      '<div class="body" >{{grammar.body}} </div>' +
      '<div class="examples" ng-repeat="example in grammar.examples">{{example}} </div>' +
      '</div>'
    };
  });


