(function () {
    'use strict';

    var source = angular.module('source');

    source.directive('sourceX', ['CONFIG', '$templateCache', function (CONFIG, $templateCache) {
        return {
            restrict: 'E',
            replace: true,
            controller: 'SourceController',
            template: $templateCache.get(CONFIG.URL.TEMPLATE.VIEW_SOURCE)
        };
    }]);

})();


