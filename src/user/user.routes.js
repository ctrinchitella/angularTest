(function () {
    'use strict';

    angular
        .module('user')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'layout.user',
                config: {
                    name: 'user',
                    url: '/User',
                    templateUrl: 'src/user/user.html',
                    controller: 'User',
                    controllerAs: 'vm'
                }
            }
        ];
    }

})();