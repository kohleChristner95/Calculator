let myApp = angular.module('myApp', []);

myApp.controller('btnController', function($scope, $rootScope, $log) {
    $scope.zero = 0
    $scope.one = 1
    $scope.two = 2
    $scope.three = 3
    $scope.four = 4
    $scope.five = 5
    $scope.six = 6
    $scope.seven = 7
    $scope.eight = 8
    $scope.nine = 9
    $scope.inputValue = '';
    
    let arr;
    $scope.arr;
    const initialize = () => {
    $scope.arr = [];
    arr = $scope.arr
    }
    initialize();
    
    $scope.add = () => {
        arr.push($scope.inputValue);
        $scope.inputValue = '';
        console.log(arr);
    }

    $scope.eval = () => {
        arr.push($scope.inputValue);
        $scope.inputValue = Number(arr[0]) + Number(arr[1])
        initialize();
    }
    
    $scope.addOn = function(num) {
        $scope.inputValue = $scope.inputValue + num;
        console.log($scope.inputValue);
    }
    
    $scope.clearInputValue = () => {
        $scope.inputValue = '';
        initialize();
        console.log(arr, $scope.inputValue)
    }

    $scope.minus = () => {
        $scope.inputValue = $scope.inputValue + '-';
    }

    
})