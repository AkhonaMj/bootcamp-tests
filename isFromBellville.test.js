describe("isFromBellville function", function () {

    it("It should return true if a registration number starts with CY ", function () {
        assert.equal(isFromBellville('CY 123'), true);
    });

    it("It should return false if a registration number does not starts with CY ", function () {
        assert.equal(isFromBellville('CJ 123'), false);
    });

    it("It should return false if a registration number starts with CJ ", function () {
        assert.equal(isFromBellville('CJ 123'), false);
    });
});