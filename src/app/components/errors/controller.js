(function () {

    'use strict';

    var errors = angular.module('errors', ['common', 'config', 'formatter']);

    errors.controller('ErrorsController', ['$scope', '$log', function($scope, $log) {

        $log.debug('[wallet] Errors controller ran');

    }]);

}());