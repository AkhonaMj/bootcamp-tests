describe("fromWhere function", function(){
    it("It should return the town the car is from. If the reg number starts with CY return Bellville.",function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville');
    });
it("It should return the town the car is from. If the reg number starts with CJ return Paarl.", function(){
    assert.equal(fromWhere('CJ 343502'), 'Paarl');
    
});


it("It should return the town the car is from. If the reg number starts with CA return Cape Town.", function(){
    assert.equal(fromWhere('CA 987504'), 'Cape Town');
});
    it("If otherwise it should return Some other place!", function(){
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');


});
});