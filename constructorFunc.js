// new keyword -> creates new object and change in one object does not affect on the other
// Contructor function -> the function name starts with capital letters

function Programmer(name, tech){
    this.name = name
    this.tech = tech
    this.work = function(){
        console.log("Solve errors")
    }
}

let programmer1 = new Programmer("Shreya", "React")
console.log(programmer1)

let programmer2 = new Programmer("Riya", "Flutter")
console.log(programmer2)

programmer2.tech = "Java"
console.log(programmer2)

programmer1.work()