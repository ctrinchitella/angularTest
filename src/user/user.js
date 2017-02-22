(function () {
    'use strict';

    angular
        .module('user')
        .controller('User', User);


        function User() {
            var vm = this;

            vm.name = 'Carla';
            
        }

})();