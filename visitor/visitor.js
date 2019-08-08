//counts number of files saved
var count = 0;

//Visitor class has constructor, Count, save and load methods
class Visitor {
 constructor ( name,surname, date, time, comment, assistant){
     this.name = name ;
     this.surname = surname;
     this.date = date;
     this.time = time;
     this.comment = comment
     this.assistant = assistant;
 }

//Count method counts number of files saved
Count() {
    count += 1;
 }

 //save method saves visitor information
 save() {
    var fs = require('fs');

   this.Count();
      
 fs.writeFile("visitor" + count + ".json", `Fullname: ${this.name} ${this.surname} \n Date: ${this.date} \n Time: ${this.time}\n Comment: ${this.comment}\n assistant: ${this.assistant}.`, function (err) {
    if(err){
          throw err;
      }
  });
 }

 //load method loads visitor information
 load(a) {
    var fs = require('fs');

     fs.readFile("./visitor" + a +".json", "utf8",(err, data) => {
      if (err) throw err;
      console.log(data);
    });
    }
}

//instances of Visitor class
var visitor = new Visitor( "arnold", "bake", 12032019,1330, "application enquiry", "carmen");
var visitor1 = new Visitor( "dolly", "elizabeth", 10062019, 0900, "online test", "felicity");
var visitor2 = new Visitor( "gerald", "harry", 26072019, 1542, "bootcamp", "innocent");
visitor.save();
visitor1.save();
visitor2.save();
visitor.load(1);var visitor1 = new Visitor( "dolly", "elizabeth", 10062019, 0900, "online test", "felicity");
