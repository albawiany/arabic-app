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
      '<div class="passage-text">' +
      '<div class="new-paragraph" ng-repeat="paragraph in n.content">{{paragraph}}</div>' +
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
      '<div class="line-separator"></div>' +
      '<div class="option clickable"><div class="word clickable" ng-click="answerTheQuestion($index,0)">{{n.option1}}</div>' +
      '<div class="option clickable"><div class="word clickable" ng-click="answerTheQuestion($index,1)">{{n.option2}}</div>' +
      '<div class="option clickable"><div class="word clickable" ng-click="answerTheQuestion($index,2)">{{n.option3}}</div>' +
      '</div>' +
      '<div ng-show="n.status" class="status-message"> {{n.status}}</div>' +
      '</div>' + '</div>'
    };
  })
  .directive('insertVocabulary', ['ngAudio', function (ngAudio) {
    'use strict';
    return {
      restrict: 'E',
      scope: {
        vocab: '='
      },
      link: function (scope) {
        scope.jiim = "ج";

        scope.playSound = function (input) {
          var audio = ngAudio.load(input);
          if(audio.play) {
            audio.play();
          }
        };
      },
      template: '<div class="vocab-item" ng-repeat="item in vocab track by $index">' +
      '<div  class="word clickable" ng-click="playSound(item.audio)"> {{item.word}}</div> ' +
      '<div class="meaning">{{item.meaning}}</div>' +
      '<div class="info" ng-show="!item.conjugationPresent && item.plural" >{{item.plural}}<div class="jiim">{{jiim}}</div></div>' +
      '<div class="info" ng-show="item.conjugationPresent" >{{item.conjugationPresent}} </div>' +
      '<div class="info" ng-show="item.conjugationPresent">{{item.conjugationPast}} </div>' +
      '<div class="examples" ng-repeat="example in item.examples">' +
      '<div class="example"> {{example}} </div>' + '</div>' +
      '<div class="line-separator"></div>' +
      '</div>'
    };
  }]).directive('insertGrammar', function () {
    'use strict';
    return {
      restrict: 'E',
      scope: {
        grammar: '='
      },
      template: '<div class="grammar">' +
      '<div class="title" >{{grammar.title}}</div>' +
      '<div class="body"><div ng-repeat="paragraph in grammar.body"> {{paragraph}} </div></div>' +
      '<div class="examples" ng-repeat="example in grammar.examples">{{example}} </div>' +
      '</div>'
    };
  });


