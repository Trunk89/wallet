describe('WalletController', function() {

    beforeEach(
        module('wallet')
    );
    var serviceLocator = angular.injector(['ng', 'wallet']);
    var scope, $localStorage, Balance, $controllers, History;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        Balance = serviceLocator.get('Balance');
        History = serviceLocator.get('History');
        $controllers = serviceLocator.get('$controller');
    }));

    it('check if Balance and History is service is called on addBalance and removeBalance', function() {
        var spyAddBalance = sinon.spy(Balance, 'add'),
            spyHistory = sinon.spy(History, 'create'),
            spyRemoveBalance = sinon.spy(Balance, 'remove');

        $localStorage = {};
        $localStorage.wallet = {};
        $localStorage.wallet.currentBalance = 0;

        $controllers('WalletController', {$scope: scope, Balance: Balance, History: History, $localStorage: $localStorage});

        scope.form = {};
        scope.form.addBalance = 40;
        scope.addBalance();

        assert(spyAddBalance.calledOnce);
        assert(spyHistory.calledOnce);

        spyAddBalance.reset();
        spyHistory.reset();

        scope.form.removeBalance = 40;
        scope.removeBalance();

        assert(spyRemoveBalance.calledOnce);
        assert(spyHistory.calledOnce);
    });

});