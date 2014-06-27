angular.module('starter.controllers', [])

.controller('SongDetailCtrl', function($scope, $stateParams, Song) {
  $scope.song = songFactory.getSong($stateParams.songId);
})

.controller('SongCtrl', ['$scope', 'songFactory', 
        function ($scope, songFactory) {

    $scope.status;
    $scope.songs;

    getSongs();

    function getSongs() {
        songFactory.getSongs()
            .success(function (songs) {
                $scope.songs = songs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load song data: ' + error.message;
            });
    }
}]);