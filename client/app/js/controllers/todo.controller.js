'use strict';

angular.module('arabicApp')
    .controller('TodoCtrl',[ '$scope', '$http','socket' ,function ($scope, $http, socket) {
        $scope.awesomeThings = [];

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            socket.syncUpdates('thing', $scope.awesomeThings);
        });

        $scope.addThing = function() {
            if($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', { name: $scope.newThing });
            $scope.newThing = '';
        };

        $scope.deleteThing = function(thing) {
            $http.delete('/api/things/' + thing._id);
        };
        $http.post('/api/scores', { name: $scope.newThing, score: 2 });

    $http.get('/api/scores').success(function() {
    });



        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('thing');
        });
    }]);
