angular.module('starter.controllers', [])

/*
.controller('SongCtrl', function($scope, Song) {
  $scope.song = Song.all();
})

.controller('SongDetailCtrl', function($scope, $stateParams, Song) {
  $scope.song = Song.get($stateParams.songId);
})*/

.controller('SongCtrl', ['$scope', 'dataFactory', 
        function ($scope, dataFactory) {

    $scope.status;
    $scope.songs;

    getSongs();

    function getSongs() {
        dataFactory.getSongs()
            .success(function (songs) {
                $scope.songs = songs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load song data: ' + error.message;
            });
    }

    $scope.updateSong = function (id) {
        var song;
        for (var i = 0; i < $scope.songs.length; i++) {
            var currSong = $scope.songs[i];
            if (currSong.id === id) {
                song = currSong;
                break;
            }
        }

        dataFactory.updateSong(song)
          .success(function () {
              $scope.status = 'Updated Song! Refreshing song list.';
          })
          .error(function (error) {
              $scope.status = 'Unable to update song: ' + error.message;
          });
    };

    $scope.insertSong = function () {
        //Fake song data
        var song = {
            id: 1,
            title: 'Hino do Brasil',
            author: 'Desconhecido',
            lyrics: 'aeeeeee é nois parapapapapapa pa pa pa pa'
        };
        dataFactory.insertSong(song)
            .success(function () {
                $scope.status = 'Inserted Song! Refreshing song list.';
                $scope.songs.push(song);
            }).
            error(function(error) {
                $scope.status = 'Unable to insert song: ' + error.message;
            });
    };

    $scope.deleteSong = function (id) {
        dataFactory.deleteSong(id)
        .success(function () {
            $scope.status = 'Deleted Song! Refreshing song list.';
            for (var i = 0; i < $scope.songs.length; i++) {
                var song = $scope.songs[i];
                if (song.id === id) {
                    $scope.songs.splice(i, 1);
                    break;
                }
            }
            $scope.orders = null;
        })
        .error(function (error) {
            $scope.status = 'Unable to delete song: ' + error.message;
        });
    };
}]);