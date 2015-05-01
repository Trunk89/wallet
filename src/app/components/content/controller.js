(function () {

    'use strict';

    var content = angular.module('content', ['config']);

    content.controller('ContentController', ['$rootScope', 'Endpoint', '$log', function ($rootScope, Endpoint, $log) {

        //initialize data discovery process
        Endpoint.loadInitialData();

        $log.debug('[wallet] Content controller ran');

    }]);

}());