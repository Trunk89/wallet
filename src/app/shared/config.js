(function () {
    'use strict';

    var app = angular.module('common', ['angular.filter', 'config', 'ngStorage']);

    app.constant('CONFIG', {
        URL: {
            ROUTE: {
                WALLET: 'app/pages/wallet.html'
            },
            TEMPLATE: {
                HEADER: 'src/app/components/header/header.html',
                WALLET: {
                    MAIN: 'src/app/components/wallet/wallet.html'
                },
                ERRORS: {
                    DATA_ERROR: 'src/app/components/errors/error_message.html'
                },
                VIEW_SOURCE: 'src/app/components/source/source.html'
            }
        }
    });

    app.config(['$logProvider', 'ENV_CONFIG', function($logProvider, ENV_CONFIG) {
        $logProvider.debugEnabled(ENV_CONFIG.DEBUG);
    }]);

})();