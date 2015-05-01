(function () {

    'use strict';

    var wallet = angular.module('wallet', ['common', 'config', 'formatter']);

    wallet.controller('WalletController', ['$scope', '$log', function($scope, $log) {

        $scope.$watch('user.id', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.user) {
                return;
            }
            load($scope);
        }, true);

        function load(scope) {
            scope.user = $rootScope.user;
            scope.messages = $rootScope.messages;
            console.log('loaded');
        }

        $log.debug('[wallet] Wallet controller ran');

    }]);

}());