(function () {

    'use strict';

    var content = angular.module('content', ['common', 'config']);

    content.controller('ContentController', ['$log', 'Endpoint', function ($log, Endpoint) {

        //initialize data discovery process
        Endpoint.loadInitialData();

        $log.debug('[wallet] Content controller ran');

    }]);

}());