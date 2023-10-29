// Public fields -> The public class fields are properties that can be
//                  accessed and modified from outside the class. 
//               -> The fields of the class are public by default and 
//                  declared without any syntax.
//               -> They are accessible from outside the class using
//                  instances of of the class.

// Private fields -> The private class fields are created using '#' prefix.
//                -> Private properties and methods of the class can be 
//                   accessed from only inside the class and are not 
//                   accessible outside the class.
//                -> Private fields provide true encapsulation and data
//                   privacy, preventing  external code from directly
//                   accessing and modifying them.
//                -> The private properties should be declared inside 
//                   the class body.
//                -> The constructors cannot be private.

class PrivateFeatures{
    #privateData
    publicData
    constructor(privateData, publicData){
        this.#privateData = privateData
        this.publicData = publicData
    }

    #privateMethod(){
        console.log("This is the private method")
        console.log(this.#privateData)
    }

    getData(){
        this.#privateMethod()
        return this.#privateData + " " + this.publicData
    }
}

let private = new PrivateFeatures("privateData", "publicData");
console.log(private.getData());
console.log(private.publicData)
// console.log(private.#privateData) -> gives an error
// private.#privateMethod() -> gives an error