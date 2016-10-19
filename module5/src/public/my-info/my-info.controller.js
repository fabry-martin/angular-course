(function () {
    "use strict";

    angular.module('public')
            .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['UserService'];
    function MyInfoController(UserService) {
        var $ctrl = this;

        $ctrl.isUserDefined = function () {
            return UserService.user !== undefined && UserService.user !== null;
        };
        
        $ctrl.getUser = function() {
            return UserService.user;
        };
    }


})();
