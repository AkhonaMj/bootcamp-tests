describe("the greet function", function () {

    it("greet Bob with 'Hello, Bob'", function () {
        assert.equal(greet('Bob'), 'Hello, Bob');


    });

    it("greet Sam with 'Hello, Sam'", function () {
       assert.equal(greet('Sam'), 'Hello, Sam');
    });
});