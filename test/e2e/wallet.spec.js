describe( 'E2E: example', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
    });

    it( 'should have the expected title', function () {
        browser.get( '/' );
        var title='Your Wallet';

        expect(browser.getTitle()).toBe(title);
    });
} );