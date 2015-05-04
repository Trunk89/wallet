(function () {
    'use strict';

    var wallet = angular.module('wallet');

    /**
     * @constructor Balance
     * @memberof wallet
     * @description Handle balance add/remove validation
     */
    wallet.factory('Balance', [function () {
        return {
            /**
             * @method remove
             * @description Handles removing balance from currentBalance
             * @memberof wallet.Balance
             * @param {int} amount - amount to be removed from current balance
             * @param {int} balance - current wallet balance
             */
            remove: function remove(amount, balance) {
                var result;

                amount = parseFloat(amount);
                balance = parseFloat(balance);

                if (balance - amount < 0) {
                    result = -1;
                } else {
                    result = balance - amount;
                }

                return result;
            },
            /**
             * @method add
             * @description Handles adding balance to wallet
             * @memberof wallet.Balance
             * @param {int} amount - amount to be added to current balance
             * @param {int} balance - current wallet balance
             */
            add: function add(amount, balance) {
                var result;

                amount = parseFloat(amount);
                balance = parseFloat(balance);
                result = amount + balance;

                return result;
            }
        };
    }]);

    /**
     * @constructor History
     * @memberof wallet
     * @description Handle creating new instances of history entry
     */
    wallet.factory('History', [function () {
        return {
            /**
             * @method create
             * @description History entries factory
             * @memberof wallet.History
             * @param {int} amount - amount to be added/removed from current balance
             * @param {int} balance - current wallet balance after adding/removing the amount
             * @param {string} type - type of the history: add, remove
             */
            create: function create(amount, balance, type) {
                var date = new Date(),
                    day = date.getDate(),
                    month = date.getMonth()+ 1,
                    year = date.getFullYear(),
                    fullDate,
                    amount = parseFloat(amount),
                    balance = parseFloat(balance);

                if (day < 10) {
                    day = '0' + day;
                }

                if (month < 10) {
                    month = '0' + month;
                }

                fullDate = [day,'/',month,'/',year].join('');

                return { amount: amount, totalBalance: balance, date: fullDate, type: type };

            }
        };
    }]);

}());