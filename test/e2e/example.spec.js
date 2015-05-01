describe( 'E2E: example', function() {

    beforeEach(function() {
        browser.ignoreSynchronization = true;
    });

    it( 'should have the expected title', function () {
        browser.get( '/' );
        var title='Bambino Buddy';

        expect(browser.getTitle()).toBe(title);
    });
} );