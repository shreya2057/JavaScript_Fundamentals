class Students{
    #age;
    constructor(name, age){
        this.name = name;
        this.#age = age
    }

    get names(){
        return this.name;
    }

    get ages(){
        return this.#age;
    }

    set changeAge(newAge){
        return this.#age = newAge
    }
}

let student1 = new Students("Shreya", 21);
console.log(student1.ages);
student1.changeAge = 23;
console.log(student1.ages);