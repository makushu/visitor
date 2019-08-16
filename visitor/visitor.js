//counts number of files saved
var count = 0;

//exports Visitor class
module.exports = class Visitor{
   

//Visitor class has constructor, Count, save and load methods
 constructor ( fullname, age, date, time, comment, assistant){
     this.fullname = fullname;
     this.age = age;
     this.date = date;
     this.time = time;
     this.comment = comment
     this.assistant = assistant;
 }


//Count method counts number of files saved
Count() {
    return count += 1;
 }

 //save method saves visitor information
 save() {
    var fs = require('fs');

   this.Count();
      
 fs.writeFile("visitor_" + count + ".json", `Fullname: ${this.fullname} ${this.age} \n Date: ${this.date} \n Time: ${this.time}\n Comment: ${this.comment}\n assistant: ${this.assistant}.`, function (err) {
    if(err){
          throw err;
      }
  });
      return "File has been created.";

 }



 //load method loads visitor information
 load(a) {
    var fs = require('fs');

     fs.readFile("./visitor_" + a +".json", "utf8",(err, data) => {
        if (err) 
          throw err;
          return data;
    });

    }
}
