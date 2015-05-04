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

    formatter.filter('currencyFilter', [function() {
        return function(unformattedType) {

            return '£' + unformattedType;
        };
    }]);

    formatter.filter('floatValue', [function() {
        return function(unformattedType) {

            return parseFloat(Math.round(unformattedType * 100) / 100).toFixed(2);
        };
    }]);

}());