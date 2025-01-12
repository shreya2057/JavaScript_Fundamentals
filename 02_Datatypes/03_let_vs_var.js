// Scope
// let -> the variable declared using let can be used within the block.
// var -> the variable declared using var can be used within the function.

function letVsVar() {
  let letFunction = "Variable created using let inside function";
  var varFunction = "Variable created using var inside function";

  {
    let letBlock = "Variable created using let inside block";
    var varBlock = "Variable created using var inside block";

    console.log("Accessing outside the block");
    console.log(letBlock);
    console.log(varBlock + "\n");
  }

  console.log(letFunction); // Generates output
  console.log(varFunction + "\n"); // Generates output

  console.log("Accessing outside the block and within the function");
  // console.log(letBlock)    // ReferenceError: letBlock is not defined
  console.log(varBlock + "\n"); // Generates output
}

letVsVar();

// Hoisting
// let -> Variables declared using let are not initialized until their
//        definition is evaluated.
//     -> Accessing them before the initialization results in error.
// var -> Variables declared using var are hoisted i.e initialized with
//        undefined.
//     -> They can be accessed before the initialization without error.

console.log(variable_var);
var variable_var = "Variable declared using var";
console.log(variable_var);

// console.log(variable_let)    // ReferenceError
var variable_let = "Variable declared using var";
console.log(variable_let + "\n");

// Global access
// let -> let does not create a property on global object
// var -> var creates a property on global object

// let globalLet = "Trying to access let variable globally"
// var globalVar = "Trying to access var variable globally"

// console.log(window.globalLet)    // Cannot be accessed globally
// console.log(window.globalVar)    // Can be accessed globally

// Redeclaration
// var -> it lets redeclaration of same variable
// let -> it doesn't allow redeclaration of same variable

var sameVariableVar = "Hello this is the original text";
console.log(sameVariableVar);
var sameVariableVar = "Hello this is the changed text";
console.log(sameVariableVar);

// Generates Error
// let sameVariablelet = "Hello this is the original text";
// console.log(sameVariableVar);
// let sameVariablelet = "Hello this is the changed text";
// console.log(sameVariableVar);
