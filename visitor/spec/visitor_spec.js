describe("Count",function(){
    it("check if Count is defined.", function(){
        expect(visitor.Count()).toBeDefined();
});


describe("Visitor" ,function(){
    var Visitor;
   
    beforeEach(function(){
        Visitor = require('../visitor');
        visitor = new Visitor( "arnold bake", 19, "12032019","1330", "application enquiry", "carmen");
    });


    it("Check if Visitor is defined", function(){
        expect(visitor).toBeDefined();
    });
    

    it("Should Create a file that saves the visitor's data.",function(){
        let result = "File has been created."   
        expect(visitor.save()).toEqual(result);
    });
});


describe("Load",function(){
    it("should load content", function () {
        var result = visitor.load(1);
        expect(result).not.toBe(null);
    }) 
});


});