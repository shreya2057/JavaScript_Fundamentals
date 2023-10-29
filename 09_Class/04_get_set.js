// Getter and setter -> Allows to access private properties and methods 
//                      of the class in more controlled way.
//                   -> While accessing getter and setter methods brackets
//                      are not needed. --> object.method

// Getter -> The getter methods are used to access the properties of 
//           an object.
//        -> Getter are needed to access private properties.

// Setter -> The setter methods are used to change the values of the object.

class Perimeter{
    #length
    #breadth
    constructor({length, breadth = length}={}){
        this.#length =  length;
        this.#breadth = breadth; 
    }

    calcRect() {
        return 2*(this.#length+this.#breadth);
    }

    // Getter -> methods used to access the private properties of class
    // private properties cannot be accessed outside the class
    // through objects, so getter is used.

    get length(){
        return this.#length;
    }

    get breadth(){
        return this.#breadth
    }

    // Setter -> method used to set the values of the object
    // private properties cannot be changed outside the class
    // through objects, so setter is used.

    set changeLength(newLength){
        return this.#length = newLength;
    }

    set changeBreadth(newBreadth){
        return this.#breadth = newBreadth;
    }
}

let rect = new Perimeter({length: 2,breadth: 3});
console.log("Perimeter of rectangle is: " + rect.calcRect());
console.log("The length of the rectangle is: " +  rect.length);
console.log("The breadth of the rectangle is: " + rect.breadth)
console.log("\n" + "After changing the values")
rect.changeLength = 5;
rect.changeBreadth = 7;
console.log("Perimeter of rectangle is: " + rect.calcRect());
console.log("The length of the rectangle is: " +  rect.length);
console.log("The breadth of the rectangle is: " + rect.breadth)