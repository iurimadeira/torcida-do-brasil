angular.module('starter.controllers', [])

.controller('SongDetailCtrl', ['$scope', '$stateParams', 'songFactory',
        function ($scope, $stateParams, songFactory) {

    getSong($stateParams.songId); 
    songDetail = true;

    $scope.myRightButtons = {
        text: "Votar!",
        type: "button button-clear button-positive"
    }

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

    songDetail = false;

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