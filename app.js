var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

myApp.service('nameService', function() {
    
    var self = this;
    this.name = 'John Doe';
    
    this.namelenght = function() {
        
        return self.name.length;
        
    }
})

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.person = {
        name: 'John Doe',
        address: 'Endereço completo, rua etc'
    }
    
}]);


myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {

    $scope.num = $routeParams.num || 'No param available.';
    
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        
        nameService.name = $scope.name;
        
    })

}]);

myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            personName: "@",
            personAddress: "@" 

            }
        }
    
})
