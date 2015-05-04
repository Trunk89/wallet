(function () {
    'use strict';

    var wallet = angular.module('wallet');

    wallet.directive('walletMain', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            template: $templateCache.get(CONFIG.URL.TEMPLATE.WALLET.MAIN)
        };
    }]);

    wallet.directive('walletHistory', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            template: $templateCache.get(CONFIG.URL.TEMPLATE.WALLET.HISTORY)
        };
    }]);

    wallet.directive('walletForms', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            template: $templateCache.get(CONFIG.URL.TEMPLATE.WALLET.FORMS)
        };
    }]);

})();
