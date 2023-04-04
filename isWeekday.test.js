describe("isWeekday function", function () {

    it("It should return true if the day passed in is Monday.", function () {
        assert.equal(isWeekday('Monday'), true);
    });
    it("It should return true if the day passed in is Wednesday", function () {
        assert.equal(isWeekday('Wednesday'), true);
    });
    it("It should return true if the day passed in is Saturday.", function () {
        assert.equal(isWeekday('Saturday'), false);
    });
});