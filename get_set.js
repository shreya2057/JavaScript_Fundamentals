class Perimeter{
    constructor({length, breadth = length}={}){
        this.length =  length;
        this.breadth = breadth; 
    }

    calcRect() {
        return 2*(this.length+this.breadth);
    }

    // Getter -> methods used to access the properties of object
    get lengths(){
        return this.length;
    }

    // Setter -> method used to set the values of the object
    set changeLength(newLength){
        return this.length = newLength;
    }
}

let rect = new Perimeter({length: 2,breadth: 3});
console.log(rect.calcRect());
console.log(rect.lengths);
rect.changeLength = 5;
console.log(rect.calcRect());

// Object.defineProperty()

const student= {
    name: "Shreya"
};

// getting method
Object.defineProperty(student, "getName", {
    get: function(){
        return this.name;
    }
});

// Setting method
Object.defineProperty(student, "setName", {
    set: function(newName){
        return this.name = newName;
    }
});

console.log(student.getName);
student.setName = "Riya";
console.log(student.name);