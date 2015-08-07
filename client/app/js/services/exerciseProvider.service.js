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
  .directive('insertExcerises', function(){
    'use strict';
    var data,index;
    return {
      restrict: 'E',
      scope : {
        data:'@',
        index: '@'
      },
      template: 
                '<div>The question you must answer is </div>'  +
                '<div>{{data[index].question}}</div>',
      link: function(){
        console.log(data);
      }
    };
  });


//        question : '',
//option1 : '',
 // option2 : '',
 // option3 : '',
  //correct : ''
