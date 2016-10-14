(function () {
    'use strict';

    angular.module('MenuApp')
            .config(RoutingConfig);

    RoutingConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutingConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

        $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'src/templates/home.template.html'
                })
                .state('categoryList', {
                    url: '/categoryList',
                    templateUrl: 'src/templates/category.list.template.html',
                    controller: 'CategoryListController as catList',
                    resolve: {
                        categoriesFromService: ['MenuDataService', function (MenuDataService) {
                                console.log('loading categories');
                                var promise = MenuDataService.getAllCategories();
                                return promise.then(function (response) {
                                    return  response.data;
                                }).catch(function (error) {
                                    console.log(error);
                                });
                            }]
                    }
                })
                .state('items', {
                    url: '/items/{catShortName}',
                    templateUrl: 'src/templates/item.list.template.html',
                    controller: 'ItemsInCategoryController as itemListCtrl',
                    resolve: {
                        itemsInCategory: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
                                var categoryName = $stateParams.catShortName;
                                console.log('loading items in category ' + categoryName);
                                var promise = MenuDataService.getItemsForCategory(categoryName);
                                return promise.then(function (response) {
                                    return response.data.menu_items;
                                }).catch(function (error) {
                                    console.log(error);
                                });
                            }]
                    }
                });
    }
    ;
})();
