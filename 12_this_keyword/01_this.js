// this -> In object, this keyword refers to the current object.
//      -> In class, this keyword refers to current instance of class.


// this keyword for object
let message = {
    sender: "Sender",
    receiver: "Receiver",
    sent: function(){
        // Similar to message.sender
        console.log(this.sender)    //this represents the object message
    }
}

message.sent()

// this keyword for class

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