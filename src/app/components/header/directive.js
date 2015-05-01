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

    header.directive("scrollHeader", ['$window', function ($window) {
        return function(scope) {
            angular.element($window).bind("scroll", function() {

                scope.scrollingPageChangeClass = this.pageYOffset > 0;

                scope.$apply();
            });
        };
    }]);

})();


