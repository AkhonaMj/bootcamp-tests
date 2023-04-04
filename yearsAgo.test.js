describe("yearsAgo function", function () {
    it("It should return how many years ago that year is from the current year.", function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });
    it("It should return how many years ago that year is from the current year.", function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
    it("It should return how many years ago that year is from the current year.", function () {
        assert.equal((new Date().getFullYear() - 2010), yearsAgo(2010));
    });
});