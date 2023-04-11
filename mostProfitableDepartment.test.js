describe("mostProfitableDepartment function", function(){

    it("It should return the department with the most sales", function () {



var salesData = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 12006, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},

];
 
assert.deepEqual('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");

});

it("It should return the department with the highest sales", function () {
   var salesData2 = [
    {department : 'electronics', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'electronics', sales : 12006, day : 'Friday'},
    {department : 'electronics', sales : 16109, day : 'Saturday'},
    {department : 'steelwork', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'steelwork', sales : 1500, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
];


    assert.deepEqual('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");

});

it("It should return the department with the lowest sales", function () {
    var salesData2 = [
     {department : 'electronics', sales : 4500, day : 'Monday'},
     {department : 'outdoor', sales : 1500, day : 'Monday'},
     {department : 'carpentry', sales : 5500, day : 'Monday'},
     {department : 'steelwork', sales : 7500, day : 'Tuesday'},
     {department : 'outdoor', sales : 2505, day : 'Tuesday'},
     {department : 'carpentry', sales : 1540, day : 'Tuesday'},
     {department : 'hardware', sales : 1500, day : 'Wednesday'},
     {department : 'outdoor', sales : 8507, day : 'Wednesday'},
     {department : 'carpentry', sales : 8009, day : 'Wednesday'},
     {department : 'hardware', sales : 12000, day : 'Thursday'},
     {department : 'carpentry', sales : 6109, day : 'Thursday'},
     {department : 'hardware', sales : 7005, day : 'Friday'},
     {department : 'electronics', sales : 12006, day : 'Friday'},
     {department : 'electronics', sales : 16109, day : 'Saturday'},
     {department : 'steelwork', sales : 7500, day : 'Tuesday'},
     {department : 'outdoor', sales : 2505, day : 'Tuesday'},
     {department : 'carpentry', sales : 1540, day : 'Tuesday'},
     {department : 'steelwork', sales : 1500, day : 'Wednesday'},
     {department : 'carpentry', sales : 900, day : 'Wednesday'},
 ];

 assert.deepEqual('electronics', mostProfitableDepartment(salesData2), "Most profitable department is 'electronics' for dataset 2");
});
});