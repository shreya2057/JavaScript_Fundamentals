// The fields of the class are public by default.
// Private properties and methods of the class can be accessed from only inside the class.
// Private class members can be created using '#' prefix.
// The constructors cannot be private.
// The private properties should be declared inside the class body.
class PrivateFeatures{
    #name;
    constructor(name){
        this.#name = name;
    }

    get getName(){
        return this.#name;
    }
}

let private = new PrivateFeatures("Shreya");
console.log(private.getName);