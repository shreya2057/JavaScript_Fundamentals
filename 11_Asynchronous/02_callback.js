// Callbacks function -> that executes after asynchronous operation has 
//                       been completed.
//                    -> The callback function will be invoked when
//                       asynchronous operation is complete.

// Asynchronous operation -> Operation that runs in background and allows 
//                           other operation to be completed.

function asyncProgram(callback){
    setTimeout(function(){
        console.log("Aynchronous operation completed")
        callback()
    },2000)
}

// Callback function 
function normalProgram(){
    console.log("Callback function is called")
}

asyncProgram(normalProgram)

// Drawbacks of callbacks
// -> Callbacks can make code difficult to read and maintain as callbacks
//    can be nested together.
// -> Callback hell -> dealing with multiple asynchronous operation 
//                  -> deeply nested callback 