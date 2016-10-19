(function () {
    'use strict';

    angular.module('common')
            .service('UserService', UserService);

    UserService.$inject = [];
    function UserService() {
        var service = this;

        service.user ;
//         service.user       = {
//            firstname: "M",
//            lastname: "F",
//            email: "@",
//            address: "AD",
//            phone: "1",
//            menuItem: {"id":1,"short_name":"A1","name":"Won Ton Soup with Chicken","description":"chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions","price_small":2.55,"price_large":5.0,"small_portion_name":"pint","large_portion_name":"quart","created_at":"2016-10-19T10:35:08.970Z","updated_at":"2016-10-19T10:35:08.970Z","category_short_name":"A","image_present":true}
//            
//        };
    }
    ;
})();