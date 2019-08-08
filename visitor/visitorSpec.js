let visitor = new Visitor();

describe("save", function(){

    it ("should have a class", function(){
        expect(visitor.save()).toHaveClass('Visitor');
    });

    it("should throw an error", () => {
        expect(() => { visitor.save() }).toThrowError();
    });


    it("should save visitor information", function () {
        expect(visitor.save()).toBe("arnold", "bake", 12032019,1330, "application enquiry", "carmen");
    });
});


describe("load", function(){

    it ("should have a class", function(){
        expect(visitor.save()).toHaveClass('Visitor');
    });

    it ("should be a string", function(){
    expect("dolly", "elizabeth", 10062019, 0900, "online test", "felicity").to.be.a('string'); 
    });

    it("should throw an error", () => {
        expect(() => { visitor.load() }).toThrowError();
    });
    
});

