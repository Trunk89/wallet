(function () {

    'use strict';

    var header = angular.module('header', ['common', 'config', 'formatter']);

    header.controller('HeaderController', ['$scope', '$log', function($scope, $log) {

        $scope.$watch('user.currentProfile', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.user) {
                return;
            }
            reload($scope);
        }, true);

        function reload(scope) {

        }

        $log.debug('[wallet] Header controller ran');

    }]);

}());