angular.module('starter.controllers', [])

.controller('SongDetailCtrl', ['$scope', '$stateParams', 'songFactory',
        function ($scope, $stateParams, songFactory) {

    getSong($stateParams.songId); 

    function getSong(id){
        songFactory.getSong(id)
            .success(function (song) {
                $scope.song = song;
            })
            .error(function (error) {
                $scope.status = 'Unable to load song data: ' + error.message;
            });      
    }
    
}])

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