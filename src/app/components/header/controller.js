(function () {

    'use strict';

    var header = angular.module('header', ['common', 'config', 'formatter']);

    header.controller('HeaderController', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log) {

        $scope.$watch('user.id', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.user) {
                return;
            }
            reload($scope);
        }, true);

        function reload(scope) {
            scope.user = $rootScope.user;
            scope.messages = $rootScope.messages;
        }

        $log.debug('[wallet] Header controller ran');

    }]);

}());