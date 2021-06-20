let myApp = angular.module('myApp', []);

myApp.controller('btnController', function($scope, $rootScope, $log) {
    $scope.zero = '0' 
    $scope.one = '1'
    $scope.two = '2'
    $scope.three = '3'
    $scope.four = '4'
    $scope.five = '5'
    $scope.six = '6'
    $scope.seven = '7'
    $scope.eight = '8'
    $scope.nine = '9'
    $scope.inputValue = '';
    $scope.getInputValue = function () {
        console.log($scope.inputValue)
    }
    
    $scope.addOn = function(num) {
        $scope.inputValue = $scope.inputValue + num;
    }

    $scope.clearInputValue = () => {
        return $scope.inputValue = '';
        console.log($scope.inputValue)
    }
    
})