var expect = chai.expect;

describe('[common helpers]', function() {

    //Including common module for testing
    beforeEach(module('helpers'));

    describe('Utils', function() {

        var Utils;

        beforeEach(inject(function (_Utils_) {
            Utils = _Utils_;
        }));

        it('contains an isArray() method', function () {
            expect(Utils.isArray).to.exist;
        });

        describe('isArray()', function () {

            it('confirms that an array provided is an array indeed', function () {
                expect(Utils.isArray([])).to.equal(true);
            });

            it('confirms that a string provided is not an array', function () {
                expect(Utils.isArray('abc')).to.equal(false);
            });

            it('confirms that a native object provided is not an array', function () {
                expect(Utils.isArray({})).to.equal(false);
            });

            it('confirms that an integer provided is not an array', function () {
                expect(Utils.isArray(1)).to.equal(false);
            });

            it('denies that a type null provided is an array', function () {
                expect(Utils.isArray(null)).to.equal(null);
            });

        });
    });
});