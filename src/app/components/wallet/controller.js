(function () {

    'use strict';

    var wallet = angular.module('wallet', ['common', 'config', 'formatter']);

    wallet.controller('WalletController', ['$rootScope', '$scope', '$log', 'Balance', 'History', '$localStorage', function($rootScope, $scope, $log, Balance, History, $localStorage) {

        $scope.history = [];
        $scope.form = {};
        $scope.removeError = false;

        $scope.$watch('user.id', function(newValue, oldValue) {
            if(newValue === oldValue && !$scope.user) {
                return;
            }
            load($scope);
        }, true);

        function load(scope) {
            scope.user = $rootScope.user;
            scope.messages = $rootScope.messages;
            scope.currentBalance = $rootScope.wallet.currentBalance;
            scope.history = $rootScope.wallet.history;
        }

        $scope.addBalance = function() {
            var amountToAdd = $scope.form.addBalance,
                currentBalance,
                historyEntry,
                history;

            $scope.removeError = false;

            currentBalance = Balance.add(amountToAdd, $scope.currentBalance);

            $localStorage.wallet.currentBalance = currentBalance;

            historyEntry = History.create(amountToAdd, currentBalance, 'add');
            $scope.history.push(historyEntry);

            history = $scope.history;

            $localStorage.wallet.history = history;

            $scope.form.addBalance = '';
            $scope.currentBalance = currentBalance;
        };

        $scope.removeBalance = function() {
            var amountToRemove = $scope.form.removeBalance,
                balance = Balance.remove(amountToRemove, $scope.currentBalance),
                historyEntry,
                history;

            $scope.removeError = false;

            if (balance === -1) {
                $scope.removeError = true;
            } else {
                $localStorage.wallet.currentBalance = balance;

                historyEntry = History.create(amountToRemove, balance, 'remove');
                $scope.history.push(historyEntry);

                history = $scope.history;

                $localStorage.wallet.history = history;

                $scope.currentBalance = balance;
                $scope.form.removeBalance = '';
            }
        };

        $log.debug('[wallet] Wallet controller ran');

    }]);

}());