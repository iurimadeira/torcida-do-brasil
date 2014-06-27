angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
 .factory('dataFactory', ['$http', function($http) {

    var urlBase = 'http://walkingfred.herokuapp.com/songs.json';
    var dataFactory = {};

    dataFactory.getSongs = function () {
        return $http.get(urlBase);
    };

    dataFactory.getSong = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertSong = function (cust) {
        return $http.post(urlBase, cust);
    };

    dataFactory.updateSong = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    dataFactory.deleteSong = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

    return dataFactory;
}]);
/*
.factory('Song', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var song = [
    { id: 0, name: 'Hino do Brasil', author: 'Dom Pedro I' },
    { id: 1, name: 'Sou brasileiro com muito orgulho', author: 'Autor sem criatividade' }    
  ];

  return {
    all: function() {
      return song;
    },
    get: function(songId) {
      // Simple index lookup
      return song[songId];
    }
  }
});*/
