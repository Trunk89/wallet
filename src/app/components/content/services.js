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
                var retryLoading = true;

                function fetchData(response) {
                    console.log(response);

                }

                function error() {
                    if (retryLoading) {
                        retryLoading = false;
                        load();
                    }
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