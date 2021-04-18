var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };

    $scope.$watch('handle', function(newValue, oldValue) {

      console.info('Changed!');
      console.log('Old: ' + oldValue);
      console.log('New: ' + newValue);

    });

    $timeout(function() {//não precisa do apply, $timeout é dentro do contexto do angularJs

      //$scope.$apply(function() { //adiciona ao contexto do agularJS, usado pra bibliotecas externas ou funções fora do angularJS, como este setTimeout

        $scope.handle = 'newTwitterHandle';
        console.log('Scope changed!');

     // });

    }, 3000); //não altera o DOM porque está fora do contexto do AngularJS
    
}]);
