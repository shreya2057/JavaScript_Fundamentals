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