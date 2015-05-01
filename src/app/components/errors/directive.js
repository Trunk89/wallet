(function () {
    'use strict';

    var errors = angular.module('errors');

    errors.directive('errorsMessage', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            controller: 'ErrorsController',
            template: $templateCache.get(CONFIG.URL.TEMPLATE.ERRORS)
        };
    }]);

})();


