(function () {
    'use strict';

    var wallet = angular.module('wallet');

    wallet.directive('walletX', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            controller: 'WalletController',
            template: $templateCache.get(CONFIG.URL.TEMPLATE.WALLET)
        };
    }]);

})();


