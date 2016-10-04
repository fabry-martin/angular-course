(function () {
    'use strict';

    angular.module('LunchCheck', [])
            .controller('LunchCheckController', LunchCheckController);


    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.message = "";
        $scope.lunchList = "";

        $scope.checkLunch = function () {
            if ($scope.lunchList === "") { 
                $scope.message = "Empty string";
            } else {

                var splitted = $scope.lunchList.split(",");
                if (splitted.length > 3) {
                    $scope.message = "Too much";
                } else {
                    $scope.message = "Enjoy";
                }
            }
        };

    }
    ;

})();


