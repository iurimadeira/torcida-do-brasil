angular.module('starter.services', [])

 .factory('songFactory', ['$http', function($http) {

    var urlBase = 'http://walkingfred.herokuapp.com/songs';
    var urlFinal = '.json';
    var songFactory = {};

    songFactory.getSongs = function () {
        return $http.get(urlBase + urlFinal);
    };

    songFactory.getSong = function (id) {
        return $http.get(urlBase + '/' + id + urlFinal);
    };

    return songFactory;
}]);
