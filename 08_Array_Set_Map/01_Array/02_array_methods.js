let numbers = new Array()

// Adding elements to the array
console.log("Adding elements from right")
numbers.push(5,7,8)
console.log(numbers)
console.log("The length of the array is " + numbers.length)

// Adding elements using index
numbers[3] = 9 
numbers[5] = 4      //Adds empty item to index 4 as no element is added
console.log(numbers)
console.log("The length of the array is " + numbers.length + "\n")

//unshift -> adds element from left
console.log("Adding elements from left")
numbers.unshift(10)
console.log(numbers)
console.log("The length of the array is " + numbers.length + "\n")

// Removing the last element from th array
console.log("Removing the last element from the array")
numbers.pop()
console.log(numbers)
console.log("The length of the array is " + numbers.length + "\n")

// Replacing the element of the array
console.log("Replacing the element of the array")
numbers[2] = 3
console.log(numbers)
console.log("The length of the array is " + numbers.length + "\n")

// Array can store heterogenous data
console.log("Storing heterogenous data in array")
numbers.push(true)
console.log(numbers)
console.log("The length of the array is " + numbers.length + "\n")

//shift the elements of array to the left
console.log("Shifting the data to the left")
numbers.shift()
console.log(numbers)
console.log("The length of the array is " + numbers.length + "\n")

// Splice removes the elements from middle 
//Splice(start index, no of elements to remove, items to be added in that place)
numbers.splice(2,1,11)
console.log(numbers)

numbers.splice(4,1,"item added")
console.log(numbers)