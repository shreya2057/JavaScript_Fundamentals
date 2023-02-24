// Inheritance allows to create class that takes all the functionality from the parent class.
// New functionaloty can be added.
// Inheritance is useful features that allows code reusability.
// 'extends' keyword is usde for inheritance.

class Person{
    constructor(names, ages){
        this.names = names;
        this.ages = ages;
    }

    personInfo(){
        return this. names + " " + this.ages;
    }
}

class Student extends Person{
    constructor(names, ages, roll_no){
        super(names, ages);
        this.roll_no = roll_no;
    }

    displayStudentInfo(){
        console.log(this.personInfo() + " " + this.roll_no);
    }
}

let student = new Student("Shreya", 24, 51);
student.displayStudentInfo();