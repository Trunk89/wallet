/**
* @namespace helpers
*/
(function () {
    'use strict';

    var commonHelpers = angular.module('helpers', []);

    /**
    * @constructor Utils
    * @memberof helpers
    * @description A set of tools that help to cover common tasks performed by the code
    */
    commonHelpers.factory('Utils', [function () {
        return {
            /**
            * @method isArray
            * @description Helps to make sure if the element provided is a valid Javascript array. It makes the following tests in a sequence:
            *
            * * rejecting null and other falsy values by checking if the element is truthy
            * * checking if typeof value is 'object', which is true for objects, arrays, and null
            * * checking if the value has a length property that is a number (should filter out objects)
            * * checking if the value contains a splice method
            * * checking if the length property is enumerable (false for arrays)
            *
            * @memberof helpers.Utils
            * @param {unknown} element - An element to be tested
            */
            isArray: function isArray(element) {
                return element && typeof element === 'object' && typeof element.length === 'number' && typeof element.splice === 'function' && !(element.propertyIsEnumerable('length'));
            }
        };
    }]);

}());