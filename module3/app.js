(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
            .constant('MenuEndpointUrl', 'https://davids-restaurant.herokuapp.com/menu_items.json')
            .service('MenuSearchService', MenuSearchService)
            .controller('NarrowItDownController', NarrowItDownController)
            .directive('foundItems', FoundItemsDirective)
            ;

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;

        var promise = MenuSearchService.getAllMenuItems();

        ctrl.title = "Found Items";

        ctrl.searchText = "";
        ctrl.foundItems = [];
        ctrl.initialSearch = true;

        promise.then(function (response) {
            ctrl.items = response.data.menu_items;
            console.log("Loaded");
        }).catch(function (error) {
            console.log(error);
        });

        ctrl.searchItems = function () {
            console.log(ctrl.searchText);
            ctrl.initialSearch = false;
            
            if (ctrl.searchText === "") {
                ctrl.foundItems = [];
                return;
            }

            var found = [];
            for (var i = 0; i < ctrl.items.length; i++) {
                var itemDesc = ctrl.items[i].description;
                if (itemDesc.toLowerCase().indexOf(ctrl.searchText) !== -1) {
                    found.push(ctrl.items[i]);
                }
            }
            ctrl.foundItems = found;
            console.log(found.length);
        };

        ctrl.removeFoundItem = function (itemIndex) {
            console.log("removing item with index " + itemIndex);
            ctrl.foundItems.splice(itemIndex, 1);
        };

    }

    MenuSearchService.$inject = ['$http', 'MenuEndpointUrl'];
    function MenuSearchService($http, MenuEndpointUrl) {
        var searchService = this;

        searchService.getAllMenuItems = function () {
            var response = $http({
                method: "GET",
                url: (MenuEndpointUrl)
            });

            return response;

        };
    }

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'foundList.html',
            scope: {
                items: '<',
                onRemove: '&',
                myTitle: '@title',
                initialSearch : '<'
            },
            controller: FoundListDirectiveController,
            controllerAs: 'list',
            bindToController: true

        };
        return ddo;
    }

    function FoundListDirectiveController() {
        var list = this;

        list.emptyList = function () {
            console.log("is initial " + list.initialSearch);
            return list.items.length === 0 && !list.initialSearch;
        };
    }
    ;

})();