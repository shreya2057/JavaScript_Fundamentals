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