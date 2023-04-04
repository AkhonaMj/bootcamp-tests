describe("transportFee function", function () {
    it("It should return the right price based on the shift you are working.", function () {
        assert.equal(transportFee('morning'), 'R20');

    });
    it("It should return the right price based on the shift you are working.", function () {
        assert.equal(transportFee('afternoon'), 'R10');

    });
    it("It should return the right price based on the shift you are working.", function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

    });
});


