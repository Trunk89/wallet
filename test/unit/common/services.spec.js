describe("[common services]", function () {

    beforeEach(
        module('common')
    );

    describe("Ajax", function () {
        var Ajax;

        beforeEach(inject(function(_Ajax_, _$httpBackend_){
            Ajax = _Ajax_;
            $httpBackend = _$httpBackend_;
        }));

        it('contains an get() method', function() {
            expect(Ajax.get).to.exist;
        });

        it("should make a successful ajax call to api", function () {

            $httpBackend.whenGET('../api/api.json').respond(200, {user: 'Adam'});

            Ajax.get({url: '../api/api.json', success: dataResponse, error: dataResponse});

            function dataResponse(res) {
                expect(res.data).to.eql({user: 'Adam'});
                expect(res.status).to.equal(200);
            }

            $httpBackend.flush();

        });

        it("should make an ajax call to api resulting in error", function () {

            $httpBackend.whenGET('../api/api.json').respond(500);

            Ajax.get({url: '../api/api.json', success: dataResponse, error: dataResponse});

            function dataResponse(res) {
                expect(res.status).to.equal(500);
            }

            $httpBackend.flush();

        });

    });

    describe("Navigation", function () {
        var Navigation;

        beforeEach(inject(function(_Navigation_){
                Navigation = _Navigation_;
        }));

        it('contains an navigate() method', function() {
            expect(Navigation.navigate).to.exist;
        });

        it('should not redirect if path is the same', inject(function(Navigation, $location) {

            Navigation.navigate('home');

            var navigation = Navigation.navigate('home');

            expect(navigation).to.eql('active');
            expect($location.path()).to.eql('/home');
        }));

    });

});