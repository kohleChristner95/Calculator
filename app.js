let myApp = angular.module('myApp', []);

myApp.controller('btnController', function($scope, $rootScope, $log) {
    // initialize numbers and other variables
    $scope.zero = 0
    $scope.one = 1
    $scope.two = 2
    $scope.three = 3
    $scope.four = 4
    $scope.five = 5
    $scope.six = 6
    $scope.seven = 7
    $scope.eight = 8
    $scope.nine = 9;
    $scope.period = '.'
    $scope.inputValue = '';
    
    // initialize operator arrays that will be used when evaluating
    let subtractArray;
    let multiplyArray;
    let divideArray;
    let addArray;

    // function that initializes calculator values
    const initialize = () => {
        // Added arrays for specific functionality
        subtractArray = [];
        multiplyArray = [];
        divideArray = [];
        addArray = [];
    }
    initialize();

    // Operator functions
    $scope.add = () => {
        addArray.push($scope.inputValue);
        $scope.inputValue = '';
    }

    $scope.subtract = () => {
        subtractArray.push($scope.inputValue);
        $scope.inputValue = '';
    }

    $scope.multiply = () => {
        multiplyArray.push($scope.inputValue);
        $scope.inputValue = '';
    }

    $scope.divide = () => {
        divideArray.push($scope.inputValue);
        $scope.inputValue = '';
    }

    // Evaluates appropriate array
    $scope.eval = () => {        
        if (addArray.length > 0) {
            addArray.push($scope.inputValue)
            $scope.inputValue = Number(addArray[0]) + Number(addArray[1]);
        }
        else if (subtractArray.length > 0) {
            subtractArray.push($scope.inputValue)
            $scope.inputValue = Number(subtractArray[0]) - Number(subtractArray[1]);
        }
        else if (multiplyArray.length > 0) {
            multiplyArray.push($scope.inputValue);
            $scope.inputValue = Number(multiplyArray[0] * multiplyArray[1]);
        }
        else if (divideArray.length > 0) {
            divideArray.push($scope.inputValue);
            $scope.inputValue = Number(divideArray[0] / divideArray[1]);
        }
        initialize();
    }
    
    // Adds onto the end of the number in the text box
    $scope.addOn = function(num) {
        $scope.inputValue = $scope.inputValue + num;
    }
    
    // Clears all input values and resets data
    $scope.clearInputValue = () => {
        $scope.inputValue = '';
        initialize();
    }
    
})