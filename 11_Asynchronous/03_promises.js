// Promises -> Promises are core feature for handling operations in a more
//             structured and managable way.
//          -> A promise represents a value that may not be available yet 
//             but will be resolved in future, either successfully with a 
//             result or unsuccessfully with an error.
//          -> Promises take a single function as the parameter when they 
//             are created. This function is often referred to as executor
//             function.

// Executor function -> The executor function takes two paramters
//                      -> resolve
//                      -> reject
//                   -> These parameters are callback function provided by
//                      promise mechanism for controlling promise's state

const promises = new Promise((resolve, reject)=>{

  // Asynchronous operation
  setTimeout(() => {
      max = 1
      min = 100
      const randomNumber = Math.floor(Math.random()*(max-min+1)+min)
      if (randomNumber<10){
          resolve(randomNumber)   //Resolve
      } else{
          reject( new Error("The number is too large and the number is " + randomNumber))   //Reject
      }
  }, 1000);
})

promises
.then(result => {
  console.log(result)
})
.catch(error => {
  console.log(error.message)
})


// resolve

// reject

// .then() method