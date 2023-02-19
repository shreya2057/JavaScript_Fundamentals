// Storing data in sequential order
let numbers = new Array()
numbers.push(5,7,8)
console.log(numbers)
console.log(numbers.length)
numbers.pop()
console.log(numbers)
numbers[2] = 3
console.log(numbers)
numbers.push(true)
console.log(numbers)

//shift the elements of array to the left
numbers.shift()
console.log(numbers)

//unshift -> adds element from left
numbers.unshift(10)
console.log(numbers)

// Splice removes the elements from middle 
//Splice(start index, no of elements to remove, items to be added in that place)

numbers.splice(2,1,11)
console.log(numbers)