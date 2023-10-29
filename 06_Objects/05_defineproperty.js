// Object.defineProperty() -> Method to add getter and setter

// Object.defineProperty(object, "Nameofthemethod", {
//      get: function(){
//          return this.key_name --> get method
//      }
//      /
//      set: function(value){
//        return this.key_name = value --> set method  
//      }
// })

const objectName= {
    key: "value"
};

// getting method
Object.defineProperty(objectName, "getValue", {
    get: function(){
        return this.key;
    }
});

// Setting method
Object.defineProperty(objectName, "setNewValue", {
    set: function(newValue){
        return this.key = newValue;
    }
});

console.log(objectName.getValue);
objectName.setNewValue = "New Value";
console.log(objectName.getValue);