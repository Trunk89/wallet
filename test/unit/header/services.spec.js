describe("[header services]", function () {

    beforeEach(
        module('header')
    );

    describe("ScrollingAbility", function () {
        var ScrollingAbility;

        beforeEach(inject(function(_ScrollingAbility_){
            ScrollingAbility = _ScrollingAbility_;
        }));

        it('contains an toggle() method', function() {
            expect(ScrollingAbility.toggle).to.exist;
        });

        it('should add and remove "disable--scrolling" class from html body tag', function() {
            var body = document.getElementsByTagName('body')[0];

            expect(body.className.indexOf('disable--scrolling') > -1).to.not.be.ok;

            ScrollingAbility.toggle();

            expect(body.className.indexOf('disable--scrolling') > -1).to.be.ok;

            ScrollingAbility.toggle();

            expect(body.className.indexOf('disable--scrolling') > -1).to.not.be.ok;
        });
    });
});