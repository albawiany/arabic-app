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
      '<div ng-repeat="n in passageArray track by $index">' +
      '<h1>unit : {{n.unit}}</h1>' +
      '<h2>{{n.title}}</h2>' +
      '<p>{{n.content}}</p>' +
      '</div>'
    };
  })
  .directive('insertExcerises', function(){
    'use strict';
    return {
      restrict: 'E',
      link: function(scope,element,attrs){
        scope.questionArray = JSON.parse(attrs.questionArray);
      },
      template:
        '<div ng-repeat="n in questionArray track by $index">' +
        '<h1>{{n.question}}</h1>' +
        '<h4>{{n.option1}}</h4>' +
        '<h4>{{n.option1}}</h4>' +
        '<h4>{{n.option1}}</h4>' +
        '</div>'
    };
  });
