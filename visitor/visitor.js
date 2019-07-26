'use strict';

const fs = require('fs');

class Visitor {
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfVIsitee){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.nameOfVIsitee = nameOfVIsitee;
    }    

    save(){
        var some_number = 0;
        let file = JSON.stringify(this,null,2);
      

        fs.writeFileSync('visitor_' + some_number+1 + '.json', file);
        
        
    }
}

  let visitor1 = new Visitor("abc def",12,13,14, "sky is blue","ghi");
 // let visitor2 = new Visitor("jkl mno",15,16,17, "grass is green","pqr");

  visitor1.save();
//visitor2.save();



//   let visitor3 = new Visitor("stu vwx",18,19,20, "today is day","yza")
//   visitor3.save();