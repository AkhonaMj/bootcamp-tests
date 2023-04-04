describe("regCheck function", function () {

    it("It should return true for registration numbers that ends with GP", function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

    });
    it("It should return false for registration numbers that don't end with M", function () {
        assert.equal(regCheck('5566 L', 'M'), false);


    });
    it("It should return false for registration numbers that don't end with MP", function () {
        assert.equal(regCheck('FGT 123 24', 'MP'), false);
    });
});