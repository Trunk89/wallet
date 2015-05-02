(function () {
    'use strict';

    var app = angular.module('common', ['angular.filter', 'config']);

    app.constant('CONFIG', {
        URL: {
            ROUTE: {
                HOME: 'app/pages/home.html',
                VIEW_SOURCE: 'app/pages/source.html'
            },
            TEMPLATE: {
                HEADER: 'src/app/components/header/header.html',
                WALLET: {

                },
                ERRORS: {
                    DATA_ERROR: 'src/app/components/errors/error_message.html'
                }
            }
        }
    });

    app.config(['$logProvider', 'ENV_CONFIG', function($logProvider, ENV_CONFIG) {
        $logProvider.debugEnabled(ENV_CONFIG.DEBUG);
    }]);

})();