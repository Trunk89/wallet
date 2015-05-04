describe("[wallet services]", function () {

    beforeEach(
        module('wallet')
    );

    describe("Balance", function () {
        var Balance;

        beforeEach(inject(function(_Balance_){
            Balance = _Balance_;
        }));

        it('contains add() and remove() methods', function() {
            expect(Balance.add).to.exist;
            expect(Balance.remove).to.exist;
        });

        it('should return correct balance after adding some amount', function() {
            //Object.defineProperty(sessionStorage, "setItem", { writable: true });
            var balance = Balance.add(20, 200);

            expect(balance).to.be.eql(220);
        });

        it('should return correct balance after removing some amount', function() {
            //Object.defineProperty(sessionStorage, "setItem", { writable: true });
            var balance = Balance.remove(20, 200);

            expect(balance).to.be.eql(180);
        });

        it('should return -1 after removing some amount greater than balance', function() {
            var balance = Balance.remove(2000, 200);

            expect(balance).to.be.eql(-1);
        });

    });

    describe("History", function () {
        var History;

        beforeEach(inject(function(_History_){
            History = _History_;
        }));

        it('contains create() method', function() {
            expect(History.create).to.exist;
        });

        it('should return a history entry and be valid on different parameter types', function() {
            var history = History.create(20, 40, 'add'),
                date = getDate();

            expect(history).to.be.eql({ amount: 20, totalBalance: 40, date: date, type: 'add' });

            history = History.create('20', '20', 'remove');

            expect(history).to.be.eql({ amount: 20, totalBalance: 20, date: date, type: 'remove' });
        });
    });

    function getDate() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth()+ 1,
            year = date.getFullYear();

        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }

        return [day,'/',month,'/',year].join('');
    }
});