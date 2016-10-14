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
                                var promise = MenuDataService.getAllCategories();
                                return promise.then(function (response) {
                                    console.log("Loaded");
                                    return  response.data;
                                }).catch(function (error) {
                                    console.log(error);
                                });
                            }]
                    }
                });
    }
    ;
})();
