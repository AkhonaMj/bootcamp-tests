describe("countRegNumber", function () {
    it("It should return the number of registration numbers in the string", function () {
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);

    });

    it("It should return the number of registration numbers in the string", function () {
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);

    });

    it("It should return the number of registration numbers in the string", function () {
        var regCount = countRegNumber('CA 182736, CA 156789')
        assert.equal(regCount, 2);
    });
});

