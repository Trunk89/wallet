(function () {
    'use strict';

    var formatter = angular.module('formatter', []);

    formatter.filter('lowerCase', [function() {
        return function(unformattedType) {

            return unformattedType.toLowerCase();
        };
    }]);

    formatter.filter('capitalize', [function() {
        return function(unformattedType) {

            return unformattedType.toUpperCase();
        };
    }]);

}());