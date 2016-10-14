(function () {
    'use strict';

    angular.module('data')
            .controller('CategoryListController', CategoryListController);
    
    CategoryListController.$inject = ['categoriesFromService'];
    function CategoryListController(categoriesFromService) {
        var listCtrl = this;
        
        listCtrl.categoryList = categoriesFromService;
    };

})();


