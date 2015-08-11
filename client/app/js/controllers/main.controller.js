'use strict';

angular.module('arabicApp')
  .controller('MainCtrl', ['$scope','ngAudio', function ($scope,ngAudio) {

    $scope.audio1 = ngAudio.load("http://k001.kiwi6.com/hotlink/2m45pypi9f/Fetty_Wap_679_feat._Remy_Boyz_Official_Video_.mp3");
    $scope.playSound = function(){
      $scope.audio1.play();
    };

    console.log($scope.audio1);


    var url = 'audio/song1.mp3';

    $scope.audio = ngAudio.load(url);
    $scope.audio.volume = 0.8;


  }]);
