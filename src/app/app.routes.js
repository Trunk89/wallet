(function () {
    'use strict';

    var router = angular.module('router', ['common']);

    router.config(['$routeProvider', 'CONFIG', function($routeProvider, CONFIG) {
        $routeProvider.
            when('/', {
                redirectTo: '/wallet'
            }).
            when('/wallet', {
                controller: 'WalletController',
                templateUrl: CONFIG.URL.ROUTE.WALLET
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

}());