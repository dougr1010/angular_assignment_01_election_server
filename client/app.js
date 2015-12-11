console.log("Hello, Doug and Lauren");

var app = angular.module('ourApp', []);

app.controller("MainController", ['$scope', '$http', function($scope, $http) {

    $scope.democrats = {};
    $http.get('/getDemocrats').then(function (response) {
        $scope.democrats = response.data;
    });

    $scope.republicans = {};
    $http.get('/getRepublicans').then(function (response) {
        $scope.republicans = response.data;
    });

    $scope.showWinner = function(){
        var allCandidates=[];
        var winner = "";
        for(var i=0; i<5; i++) {
            allCandidates[i] = $scope.democrats[i].name;
            allCandidates[i + 5] = $scope.republicans[i].name;
        }
        winner = randomName(allCandidates);
        winner = winner + "!!!";
        $scope.winner = winner;

    }

}]);

function randomName (allCandidates) {
    var randnum=Math.floor(Math.random()*10);
    var name = allCandidates[randnum];
    return name;
}
