// Classes are the template that are used for creating objects.
// Object is an entity or instance.

class Student{

    // Properties
    name = "Name of the student"
    dept = "Department of the student"

    // Methods
    printName(){
        console.log(this.name)
    }
    printdept(){
        console.log(this.dept)
    }
}

// Creating object
var student = new Student()
student.printName()
student.printdept()