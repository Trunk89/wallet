(function () {

    'use strict';

    var source = angular.module('source', ['common', 'config', 'formatter']);

    source.controller('SourceController', ['$scope', '$log', function($scope, $log) {

        $log.debug('[wallet] Source controller ran');

    }]);

}());