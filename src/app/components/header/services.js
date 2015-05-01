(function () {
    'use strict';

    var header = angular.module('header');

    /**
     * @constructor ScrollingAbility
     * @memberof common
     * @description Enable / Disable ability of scrolling on the page
     *
     * @method toggle
     *
     */
    header.factory('ScrollingAbility', [function() {
        return {
            toggle: function toggle() {
                var body = document.getElementsByTagName('body')[0];

                if (body.className.indexOf('disable--scrolling') > -1) {
                    body.className = '';
                } else {
                    body.className = 'disable--scrolling';
                }
            }
        };
    }]);

}());