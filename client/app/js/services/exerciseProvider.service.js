/**
 * Created by Daniel on 7/10/15.
 */
angular.module('exerciseProvider', [])
  .factory('exerciseProvider', [function(){
    'use strict';
    var exerciseProvider = {
    };
    return exerciseProvider;
  }])
  .directive('insertPassage', function(){
    'use strict';
    return {
      restrict: 'E',
      link: function(scope,element,attrs){
        scope.passageArray = JSON.parse(attrs.passageArray);
      },
      template:
      '<div  class="passage-box-container" ng-repeat="n in passageArray track by $index">' +
       '<div class="passage-box">' +
      '<div class="unit-title"><ul>{{n.unit}}</ul></div>' +
      '<div class="passage-title">{{n.title}}</div>' +
      '<div class="passage-text">{{n.content}}</div>' +
      '</div>'+
      '</div>'
    };
  })
  .directive('insertExcerises', function(){
    'use strict';
    return {
      restrict: 'E',
      scope : {
        test3:'&'

      },
      link: function(scope,element,attrs){
        scope.questionArray = JSON.parse(attrs.questionArray);
        scope.one = 'ElementZero';
        scope.two = 'ElementOnee';
        scope.three ='ElementTwo';
        scope.testFunction = function(input){
          input = 'Hi There';
        };
        console.log('This is from inside a directive');
        scope.test3();

      },
      template:
        '<div ng-repeat="n in questionArray track by $index">' +
        '<div class="question">{{n.question}}' +
        '<div class="option" class="0" id="{{$index + one}}" >{{n.option1}}</div>' +
        '<div class="option" class="1" id="{{$index + two}}" >{{n.option2}}</div>' +
        '<div class="option" class="2" id="{{$index + three}}" >{{n.option1}}</div>' +
        '</div>'+ '</div>'
    };
  });
