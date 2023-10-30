// Promises -> Promises are core feature for handling operations in a more
//             structured and managable way.
//          -> A promise represents a value that may not be available yet 
//             but will be resolved in future, either successfully with a 
//             result or unsuccessfully with an error.
//          -> Promises take a single function as the parameter when they 
//             are created. This function is often referred to as executor
//             function.

// -----------------------------------------------------------------------

// Executor function -> The executor function takes two paramters
//                      -> resolve
//                      -> reject
//                   -> These parameters are callback function provided by
//                      promise mechanism for controlling promise's state.

// ------------------------------------------------------------------------

// resolve
// -------
// -> The resolve function is used to fulfill the promise.
// -> When a promise is resolved, it means that asynchronous operation
//    it represents has successfully completed.
// -> When asynchronous operation represented by the promise has completed
//    successfully, the resolve() function can be called with the value 
//    that the promise is to be resolved with.    

// reject
// ------
// -> The reject function is used to indicate that the asynchronous 
//    operation has encountered an error or has failed in some way.
// -> The reject function is called with an error object or an error 
//    message to indicate that the promise should be rejected.
// -> When the promise is rejected, the error will be passed to the 
//    .catch() handler or the second argument of the .then() handler to
//    handle error condition.

// Syntax
// ------
// const promise = new Promise((resolve, reject)=>{
//    if resolved 
//        resolve(result_value)
//    else
//        reject(error)
// });

// promise
// .then(result=>{
//    //things to do with result 
// })
// .catch(error=>{
//    //things to do with error 
// })

// ------------------------------------------------------------------------

// .then() method
// --------------
// -> The then method is commonly used in conjuction with Promises.
// -> Promises are objects that represent the eventual completion 
//    (or failure) of an asynchronous operation.
// -> The then method is used to define what should happen when a promise
//    is resolved (i.e. when the operation completes successfully).

// Syntax
// ------
// promise_name.then(onFulfilled, onRejected)

// promise_name
// ------------
//    -> Promise object that is attached with the then method.

// onFulfilled
// -----------
//    -> Callback function that will be executed when the promise is 
//       resolved successfully.
//    -> It receives the result of the successful operation as its 
//       argument.

// onRejected
// ----------
//    -> This is a callback function that will be executed when the 
//       promise is rejected (i.e. when an error occurs).
//    -> It receives the reason for rejection as its argument.

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


// Note:
// -----
// -> .catch() method is used to handle rejection instead of .then() 
//    method, as .catch() method is dedicated for handling errors, readable