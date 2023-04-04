describe("the greet function", function () {

    it("It should return 'Hello' with a name passed in.", function () {
        assert.equal(greet('Bob'), 'Hello, Bob');


    });

    it("It should return 'Hello' with a name passed in.", function () {
       assert.equal(greet('Sam'), 'Hello, Sam');
    });

    it("It should return 'Hello' with a name passed in", function () {
        assert.equal(greet('Saffah'), 'Hello, Saffah');
    });     
});