(function () {
    'use strict';

    angular.module('data')
            .service('MenuDataService', MenuDataService)
            .constant('baseUrl', 'https://davids-restaurant.herokuapp.com/');

    MenuDataService.$inject = ['$http', 'baseUrl'];
    function MenuDataService($http, baseUrl) {
        var dataService = this;

        dataService.getAllCategories = function () {
            var promise = $http({
                method: "GET",
                url: (baseUrl + "categories.json")
            });
            return promise;
        };

        dataService.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url: (baseUrl + "menu_items.json"),
                params: {
                    category: categoryShortName
                }
            });

            return response;
        };
    }



})();


