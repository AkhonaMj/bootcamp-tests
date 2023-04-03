describe("regCheck function", function () {

    it("should check if a registration number is for GP, L, EC, MP registration plates.", function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);

    });
});
