// Inheritance -> Allows to create class that takes all the functionality 
//                from the parent class.
//              -> New functionality and properties can be added.
//              -> It is useful features that allows code reusability.
//              -> 'extends' keyword is used for inheritance.
//                  class Child_class extends Parent_class 
//              -> The super keyword is used to call the constructor of 
//                 its parent class to access the parent's properties 
//                 and methods.

class Parent_class{

    constructor(parent_property){
        this.parent_property = parent_property;
    }

    parent_method(){
        console.log(this.parent_property);
    }
}

class Child_class extends Parent_class{
    constructor(parent_property, child_property){

        // Accessing parent property
        super(parent_property);
        this.child_property = child_property;
    }

    child_method(){

        // Accessing parent method
        super.parent_method();
        console.log(this.child_property);
    }
}

let child = new Child_class("This is the parent property"
                , "This is the child property");
child.child_method();