(function () {
    'use strict';

    angular.module('LunchCheck', [])
            .controller('LunchCheckController', LunchCheckController);


    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.resMessage = "";
        $scope.lunchList = "";
        $scope.msgStyle = "";

        $scope.checkLunch = function () {
            if ($scope.lunchList === "") { 
                $scope.resMessage = "Empty string";
                $scope.msgStyle = "red";
            } else {
                $scope.msgStyle = "green";
                var splitted = $scope.lunchList.split(",");
                if (splitted.length > 3) {
                    $scope.resMessage = "Too much";
                } else {
                    $scope.resMessage = "Enjoy";
                }
            }
        };

    }
    ;

})();


