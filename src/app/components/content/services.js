(function () {
    'use strict';

    var content = angular.module('content');

    /**
     * @constructor Endpoint
     * @memberof content
     * @description discover API data
     *
     * @method loadInitialData
     *
     */
    content.factory('Endpoint', ['$rootScope', 'Ajax', 'ENV_CONFIG', function ($rootScope, Ajax, ENV_CONFIG) {
        return {
            loadInitialData: function getInitialData() {
                function fetchData(response) {
                    $rootScope.messages = response.data.messages;
                    $rootScope.user = response.data.user;
                }

                function error() {
                    $rootScope.generalError = true;
                }

                function load() {
                    Ajax.get({
                        url: ENV_CONFIG.ENDPOINT.API,
                        success: fetchData,
                        error: error
                    });
                }

                load();
            }
        };
    }]);
}());