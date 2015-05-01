(function () {
    'use strict';

    var app = angular.module('common', ['ngResource', 'angular.filter', 'config']);

    app.run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.$on("$locationChangeStart", function () {
            if (!$rootScope.path) {
                $rootScope.previousPath = null;
            } else {
                $rootScope.previousPath = $rootScope.path;
            }

            $rootScope.path = $location.path();
        });
    }]);

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

    app.config(['$resourceProvider', '$logProvider', 'ENV_CONFIG', function($resourceProvider, $logProvider, ENV_CONFIG) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $logProvider.debugEnabled(ENV_CONFIG.DEBUG);
    }]);

})();