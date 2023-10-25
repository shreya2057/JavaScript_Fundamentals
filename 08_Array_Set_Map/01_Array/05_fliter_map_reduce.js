// filter -> Takes the element base on the condition
// map -> Changes the value
// reduce -> Reducing the element

let num = [1,2,3,4,5,6];

// Takes the number that is divisible by 2
let filterMethod = num.filter(n => n%2===0)
console.log("Filter method")
console.log(filterMethod)

// Each element of the array is multiplied by 2
let mapMethod = filterMethod.map(n=>n*2)
console.log("Map method")
console.log(mapMethod)

// Adding all the elements of the array
let reduceMethod = mapMethod.reduce((a,b)=>a+b)
console.log("Reduce method")
console.log(reduceMethod)

let result = num.filter(n => n%2===0).map(n=> n*2).reduce((a,b)=>a+b);
console.log("Combination of filter, map and reduce")
console.log(result)