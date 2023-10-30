// Exception handing -> Technique for managing and gracefully handling 
//                      errors or exceptions that can occur during the 
//                      execution of code.
//                   -> Several mechanisms are available for working with 
//                      exceptions, including try....catch statements, 
//                      error objects and throw statements.


// try...catch statement
// ---------------------
// -> The try catch statement is the primary construct for catching and
//    handling exceptions in JavaScript.
// -> It allows to wrap a block of code in a try block and if an exception
//    occurs within that block, it can be caught and handled in the
//    associated catch block.
// -> Multiple catch blocks can be used to handle different types of
//    exception.

// Syntax
// ------
// try{
//      //block of code that might throw an exception 
// } catch(error){
//      //handling error 
//      if(condition1){
//          //handle error
//      }
//      else if(condition2){
//          //handle error
//      }
//      else{
//          //handle error
//      }
// }


// Error objects
// -------------
// JavaScript has built-in error objects like Error
// Syntax -> new Error("Error message")


// Finally block
// -------------
// -> finally block can be used to specify code that should always execute 
//    whether an exception is thrown or not.
// -> It is commonly used for cleanup operation.

// Syntax
// ------
// try{
//      //code that might throw an exception 
// } catch (error){
//      //handle the exception
// } finally{
//      //cleanup code(always executed) 
// }

// throw statements
// ----------------
// -> The throw statement is used to manually throw an exception.
// -> Any value can be thrown, but it is common to throw error objects.


function result(errorOccured){
    if(!errorOccured){
        return "Function has runned successfully"
    } else{
        throw new Error("The error has occurred")
    }
}

function exception_handling(){
    try{
        var completion = result(false)
        console.log(completion)
    } catch(error){
        console.error(error.message)
    } finally{
        console.log("Executed anyway")
    }
}

var result = exception_handling()
