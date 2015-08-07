/**
 * Created by Daniel on 7/10/15.
 */
angular.module('analytica', [])
  .factory('$analytica', [function(){
    'use strict';
    var analyticalService = {};
    return analyticalService;
  }])
  .factory('analyticaStats', ['$http',function ($http) {
    'use strict';
    var stats = {
      api: '/api/v1/stats/',
      stats: [],
      send: function (data, successCallback, errorCallback) {
        return $http.post(stats.api, data)
          .success(function (stat) {
            stats.stats.push(stat);
            if (successCallback) {return successCallback(stat);}
            return;
          }).error(errorCallback);
      },
      clearCache: function () {
        stats.stats = [];
      },
      track: function (eventKey, data, callback) {
        return $http.post(stats.api, {
          key: eventKey,
          data: data
        }).success(function(stat) {
          if (callback) {callback(null, stat);}
        }).error(function(err){
          if (callback) {callback(err);}
        });
      }
    };
    return stats;
  }]);

