var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {

    $scope.alertClick = function() {

        alert("Clicked!");

    }

    $scope.characteres = 5;
    var rulesrequest = new XMLHttpRequest()
    rulesrequest.onreadystatechange = function () {

        $scope.$apply(function () {
            if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
                $scope.rules = JSON.parse(rulesrequest.responseText);
            }
    });
    }

    rulesrequest.open("GET", "http://localhost:8080/api/v1", true);
    rulesrequest.send();

}]);
