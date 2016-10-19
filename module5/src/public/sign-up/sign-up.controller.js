(function () {
    "use strict";

    angular.module('public')
            .controller('SignUpController', SignUpController)
            .constant('endpoint', 'https://mf-rest-server.herokuapp.com');

    SignUpController.$inject = ['endpoint', '$http','UserService'];
    function SignUpController(endpoint, $http, UserService) {
        var $ctrl = this;

        $ctrl.firstname;
        $ctrl.lastname;
        $ctrl.email;
        $ctrl.address;
        $ctrl.phoneNumber;
        $ctrl.favourite;
        $ctrl.errorMessage;


        $ctrl.submit = function () {
            console.log("Submitted");
            $ctrl.errorMessage = undefined;

            //check if dish exists
            var data = $http.get(endpoint + '/menu_items/'+$ctrl.favourite+'.json').then(function (response) {
                
                //response was OK - push data further
                var user = {
                    firstname: $ctrl.firstname,
                    lastname : $ctrl.lastname,
                    email : $ctrl.email,
                    address : $ctrl.address,
                    phone : $ctrl.phoneNumber,
                    favourite : $ctrl.favourite
                };
                console.log(user);
                $ctrl.errorMessage = "Your information has been saved";
            }).catch( function (error) {
                console.log(error);
                $ctrl.errorMessage = "No such menu number exists";
            });
        };
    }


})();
