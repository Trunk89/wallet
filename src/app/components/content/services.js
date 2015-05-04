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
    content.factory('Endpoint', ['$rootScope', 'Ajax', 'ENV_CONFIG', '$localStorage', function ($rootScope, Ajax, ENV_CONFIG, $localStorage) {
        return {
            loadInitialData: function getInitialData() {
                function fetchData(response) {
                    if (!$localStorage.user) {
                        $localStorage.$default({
                            messages: response.data.messages,
                            user: response.data.user,
                            wallet: response.data.wallet
                        });
                    }

                    $rootScope.messages = response.data.messages;
                    $rootScope.user = response.data.user;
                    $rootScope.wallet = response.data.wallet;

                }

                function error() {
                    $rootScope.generalError = true;
                }

                function load() {

                    if ($localStorage && $localStorage.user) {
                        var response = {
                            data: {
                                messages: $localStorage.messages,
                                user: $localStorage.user,
                                wallet: $localStorage.wallet
                            }
                        };
                        fetchData(response);
                    } else {
                        Ajax.get({
                            url: ENV_CONFIG.ENDPOINT.API,
                            success: fetchData,
                            error: error
                        });
                    }

                }

                load();
            }

        };
    }]);
}());