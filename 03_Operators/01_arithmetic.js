// Arthmetic operation
//  + -> addition of two numbers
//  - -> substractionn of two numbers
// addition or subtraction of 2 boolean values 
//      -> the boolean value is converted to number 
//      -> i.e true to 1 and false to 0

let num = 3
num += 2 // num = num + 2
num++   // increment operator

// pre and post increment

// post increment -> first assign the value of num to x and increment
let x = num++ 

// pre increment -> first increment the value of num to x and then increment the value
let y = ++num 

// power
let power = Math.pow(4,3) //4-> number, 3 -> power
let value = 4 ** 3 // ** -> power