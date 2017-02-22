(function () {
    'use strict';

    angular
        .module('home')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'layout.home',
                config: {
                    name: 'home',
                    url: '/',
                    templateUrl: 'src/home/home.html',
                    controller: 'Home',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();