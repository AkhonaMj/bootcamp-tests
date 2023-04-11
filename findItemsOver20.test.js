describe("findItemsOver20 function", function(){

it("It should return all the products that have a quantity higher than 20.", function(){

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];


    assert.deepEqual(results,findItemsOver20(itemList));

});
it("It should return not found if the products does not have a quantity", function(){

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
        {name : 'orange',}
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];


    assert.deepEqual(results, findItemsOver20(itemList));

});
it("It should not return anything for the products that have a quantity less than 20.", function(){

    var itemList = [
        {name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
    ];
    
    var results = [
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ];


    assert.deepEqual(results, findItemsOver20(itemList));
});
});