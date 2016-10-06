(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
            .controller('ToBuyController', ToBuyController)
            .controller('AlreadyBoughtController',AlreadyBoughtController)
            .service('ShoppingListService',ShoppingListService);

    //list 1 controller
    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        var list1 = this;

        list1.items = ShoppingListService.getItemsToBuy();
        
        list1.buyItem = function (itemIndex)  {
            ShoppingListService.buyItem(itemIndex);
        };
    }
    
     //list 2 controller
    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var list2 = this;

        list2.items = ShoppingListService.getBoughtItems();
        
    }

    function ShoppingListService() {
        var service = this;
        var toBuyList = [
            { name: "Milk",
                quantity : "1"
            },
            {
                name : "Beer",
                quantity : "4"
            },
            {
                name : "Apples",
                quantity : "5"
            }
        ];
        var boughtList = [];

        service.buyItem = function (itemIndex) {
            var boughtItem = toBuyList.slice(itemIndex, itemIndex+1)[0];
            boughtList.push(boughtItem);
            toBuyList.splice(itemIndex, 1);
        };
        
        service.addBoughtItem = function (itemName, itemQuantity) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            boughtList.push(item);
        };

        service.removeItem = function (index) {
            toBuyList.splice(index, 1);
        };

        service.getItemsToBuy = function () {
            return toBuyList;
        };
        
        service.getBoughtItems = function () {
            return boughtList;
        };
        
    }
})();