// The static methods and properties of the class belong to the class rather than the instance of the class.
// The instance of the class is not needed while calling and accessing static fields.
// A class can contain more than one static fields.
// this keyword is used to called the static method by other static method.
// The static methods and properties are not accessed by other public methods.

class MyClass{
    static property;
    static method(){
        console.log("Hello from static method");
    }
}

MyClass.method();

// Another way to create static method
class AnotherClass{
    constructor(msg){
        this.msg = msg;
    }
}

AnotherClass.staticMethod = function(){
    console.log("Hello from second method");
};

AnotherClass.staticMethod();