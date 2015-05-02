(function () {

    'use strict';

    var wallet = angular.module('wallet', ['common', 'config', 'formatter']);

    wallet.controller('WalletController', ['$rootScope', '$scope', '$log', function($rootScope, $scope, $log) {

        $scope.$watch('user.id', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.user) {
                return;
            }
            load($scope);
        }, true);

        function load(scope) {
            scope.user = $rootScope.user;
            scope.messages = $rootScope.messages;
        }

        $log.debug('[wallet] Wallet controller ran');

    }]);

}());