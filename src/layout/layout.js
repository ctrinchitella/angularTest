(function () {
    'use strict';

    angular
        .module('layout')
        .controller('Layout', Layout);

    function Layout($state) {
        var vm = this;
        
        vm.NavUser = goUser;
        vm.NavHome = goHome;

        activate();

        function activate() {
        }

        function goUser(){
            $state.go('layout.user');
        }

        function goHome(){
            $state.go('layout.home');
        }
    }

})();