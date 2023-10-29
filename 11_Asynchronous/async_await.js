
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