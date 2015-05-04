describe( 'E2E: wallet', function() {

    var addInput = element(by.css('.add--form form input')),
        removeInput = element(by.css('.remove--form form input')),
        addSubmit = element(by.css('.add--form form button')),
        removeSubmit = element(by.css('.remove--form form button')),
        noItemsMessage = element(by.css('.history .no__items')),
        historyList = element.all(by.repeater('item in history')),
        errorRemove = element(by.css('.wallet .error__remove')),
        resetButton = element(by.css('.navigation .reset'));

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.get( '/wallet/min/' );
        resetStorage();
        browser.sleep(500);
    });

    it( 'should have the expected title', function () {
        var title='Your Wallet';

        expect(browser.getTitle()).toBe(title);
    });

    it( 'should add balance and remove balance and display it', function () {
        var firstHistory = historyList.get(0),
            secondHistory = historyList.get(1);

        expect(noItemsMessage.isDisplayed()).toBeTruthy();

        addInput.sendKeys('123');
        removeInput.sendKeys('123');

        addSubmit.click();
        removeSubmit.click();

        expect(firstHistory.isDisplayed()).toBeTruthy();
        expect(secondHistory.isDisplayed()).toBeTruthy();

    });

    it( 'should show error when remove amount higher than balance', function () {

        expect(noItemsMessage.isDisplayed()).toBeTruthy();
        expect(errorRemove.isDisplayed()).toBeFalsy();

        removeInput.sendKeys('123');

        removeSubmit.click();

        expect(errorRemove.isDisplayed()).toBeTruthy();


    });

    var resetStorage = function () {
        resetButton.click();
    }
});