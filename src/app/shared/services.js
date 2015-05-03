(function () {
    'use strict';

    var common = angular.module('common');

    /**
    * @constructor Ajax
    * @memberof common
    * @description A Generic Ajax Requests service
    */
    common.factory('Ajax', ['$http', function ($http) {
        return {
            /**
            * @method get
            * @description Provides a common method to send out ajax requests and handle responses
            * @memberof common.Ajax
            * @param {object} request - A request object containing mandatory and optional parameters
            *     @param {string} request.url - An url of where to send the request to
            *     @param {object} request.headers - A set of headers that should be send out with the request
            *     @param {object} request.params - A set of params that should be send out with the request
            *     @param {method} request.success - A method that should be invoked on a successful response
            *     @param {method} request.error - A method that should be invoked on an error
            */
            get: function get(request) {
                return $http({
                    method: "GET",
                    url: request.url,
                    params: request.params,
                    headers: request.headers
                }).then(request.success, request.error); // $http returns a promise, which has a then function, which also returns a promise
            }
        };
    }]);

    /**
     * @constructor Navigation
     * @memberof common
     * @description Handle routes navigation
     */
    common.factory('Navigation', ['$location', function ($location) {
        return {
            /**
             * @method navigate
             * @description Navigates to given path, checking if the current if not the same
             * @memberof common.Navigation
             * @param {string} page
             */
            navigate: function navigate(page) {
                var currentPage = $location.path().substring(1);

                return page === currentPage ? 'active' : $location.path('/' + page);
            }
        };
    }]);

}());