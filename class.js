// Classes are the template that are used for creating objects.
// Object is an entity or instance.
// Classes consists of the method called constructors.
// Constructors are the method that are used for creating and initialising the objects.
// The constructors are created automatically when class is initiated.
// The class can have only one constructor method.
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

//Creating objects
let rectangle = new Area(2,3);
console.log(rectangle.calcArea());

let square = new Area(2);
console.log(square.calcArea());