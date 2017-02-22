(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 
        'ui.router',
        'ngTouch',
        'ui.bootstrap',
        'smart-table',
        'ngSanitize',
        'ngToast',
        
        /*
         * Our reusable cross app code modules
         */
        'blocks.exception', 'blocks.logger', 'blocks.router'

    ]);
})();
