(function () {
    'use strict';

    angular.module('app')
        .config(['ngToastProvider', function(ngToastProvider){
            ngToastProvider.configure({
                verticalPosition: 'bottom',
                horizontalPosition: 'right',
                maxNumber: 3,
                newestOnTop: false,
                animation: 'fade'
            });
        }])
        .run(appRun);

    function appRun($rootScope, $state, $stateParams) {
        //We have $state and $stateParams in any $scope.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        // //Create dummy user in the cookie if not exists
        // if (!$cookieStore.get('globals')) {
        //     var globals = {
        //         currentUser: {
        //             username: 'test',
        //             password: '123'
        //         }
        //     }
        //     $cookieStore.put('globals', globals);
        // }

        //Check for previous logged in user
        //TODO: This how is done in http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx
        //But I don't like it, this should be done by the AuthenticationService
        //$rootScope.globals = $cookieStore.get('globals') || {};

    }

})();