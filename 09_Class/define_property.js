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