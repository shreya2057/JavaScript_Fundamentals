// Asynchronous operation -> that runs in background and allows other operation to be completed
function asyncProgram(callback){
    setTimeout(function(){
        console.log("Aynchronous operation completed")
        callback()
    },2000)
}

// Callback function that executes after asynchronous operation has been completed
function normalProgram(){
    console.log("Callback function is called")
}

asyncProgram(normalProgram)