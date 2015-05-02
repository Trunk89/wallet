(function () {
    'use strict';

    var header = angular.module('header');

    header.directive('mainHeader', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            controller: 'HeaderController',
            template: $templateCache.get(CONFIG.URL.TEMPLATE.HEADER)
        };
    }]);

})();


