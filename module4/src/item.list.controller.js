(function () {
    'use strict';
    
    angular.module('data')
            .controller('ItemsInCategoryController', ItemsInCategoryController);
    
    ItemsInCategoryController.$inject = ['itemsInCategory'];
    function ItemsInCategoryController(itemsInCategory, categoryName) {
        var itemsCtrl = this;
        
        itemsCtrl.items = itemsInCategory;
    }
    
})();