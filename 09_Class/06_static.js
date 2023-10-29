// static -> The static methods and properties of the class belong to 
//           the class rather than the instance of the class.
//        -> The instance of the class is not needed while 
//           calling and accessing static fields.
//        -> A class can contain more than one static fields.
//        -> this keyword is used to called the static method by 
//           other static method.
//        -> The static methods and properties are not accessed 
//           by other public methods.

class ClassWithStatic{
    static property;
    static static_method(){
        console.log("This is static method");
    }
}

ClassWithStatic.static_method();

// Another way to create static method
class ClassWithStaticMethod{
    constructor(data){
        this.data = data;
    }
}

ClassWithStaticMethod.staticMethod = function(){
    console.log("This is static method created in another way");
};

ClassWithStaticMethod.staticMethod();