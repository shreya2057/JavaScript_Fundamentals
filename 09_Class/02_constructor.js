// Constructor -> Classes consists of the method called constructors.
//             -> Method that is used for creating and initialising 
//                the objects.
//             -> It is created automatically when class is initiated.
//             -> The class can have only one constructor method.
class Area{ 
    constructor(length, breadth = length){
        this.length =  length;
        this.breadth = breadth; 
    }

    //Method
    calcArea() {
        return this.length*this.breadth;
    }
}

console.log("Class with constructor")

//Creating objects
let rectangle = new Area(2,3);
console.log(rectangle.calcArea());

let square = new Area(2);
console.log(square.calcArea());


// Constructor with named parameter

class User{
    constructor({username, email}={}){
        this.username = username
        this.email = email
    }

    printDetails(){
        console.log("username: " + this.username)
        console.log("email: " + this.email)
    }
}

console.log("\n" + "Class with constructor having named parameter")

var user = new User({username: "username123",email: "user@gmail.com"})
user.printDetails()