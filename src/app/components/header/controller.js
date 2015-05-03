(function () {

    'use strict';

    var header = angular.module('header', ['common', 'config', 'formatter']);

    header.controller('HeaderController', ['$rootScope', '$scope', '$log', '$location', '$localStorage', 'Navigation', function($rootScope, $scope, $log, $location, $localStorage, Navigation) {

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

        $scope.navigate = function (path) {
            Navigation.navigate(path);
        };

        $scope.refresh = function () {
            $localStorage.$reset();
            $scope.navigate('wallet');
        };

        $scope.viewSource = function () {

        };

        $log.debug('[wallet] Header controller ran');

    }]);

}());