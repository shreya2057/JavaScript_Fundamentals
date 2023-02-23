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
