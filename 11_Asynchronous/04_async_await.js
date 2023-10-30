// async and await -> Keywords that were introduced to simplify working 
//                    with asynchronous code and promises.
//                 -> They provide a more straight forward and 
//                    synchronous like syntax for handling asynchronous
//                    operations, making code more readble and 
//                    maintainable.

// async function
// --------------
// -> async keyword is used to declare a function asynchronous.
// -> async function lets the execution of main program while it continues
//    on background.
// -> An async function always returns a promise which can resolve with a
//    value of reject with an error.

// Syntax
// ------
// aysnc function function_name(){
//      // asynchronous operation
// }


// await keyword
// -------------
// -> Inside an async function, await keyword is used to pause execution 
//    until promise is resolved.
// -> It allows to work with promises in a more sequential and synchronous-
//    like manner.

// Syntax
// ------
// async function function_name(){
//      const variable_name =  await functions()
// }


// Asynchronous function
async function asyncFunction(){
    try{

        // Asynchronous operation
        const result = await asyncOperation()
        return result
    } catch(error){
        throw error
    } 
}

function asyncOperation(){
    const promises = new Promise((resolve, reject)=>{

        setTimeout(() => {
            max = 1
            min = 100
            const randomNumber = Math.random()
            if (randomNumber<0.05){
                resolve(randomNumber)   //Resolve
            } else{
                reject( new Error("The number is too large and the number is " + randomNumber))   //Reject
            }
        }, 1000)
    })
    return promises
}

function mainFunction(){
    console.log("Execution of main function started")
    asyncFunction()
    .then(result=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error.message)
    })
    console.log("Execution of main function ended")
}

mainFunction()