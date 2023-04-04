describe("countAllFromTown function", function () {
    it("It should return the number of registration numbers in the string that is for that town.", function () {
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');
        assert.equal(fromStellies, 3)

    });
    it("It should return the number of registration numbers in the string that is for that town.", function () {
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromKuilsriver, 1)

    });
    it("It should return the number of registration numbers in the string that is for that town.", function () {
        var fromPaarl = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF');
        assert.equal(fromPaarl, 1)
    });
});