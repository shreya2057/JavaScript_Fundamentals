// type conversion
let letter = 12
let letterchange = String(letter) //converting number into string
console.log(letter, letterchange)
console.log(typeof letter, typeof letterchange)

let value = "12"
let valueChange = Number(value) //converting string into number 
console.log(value, valueChange)
console.log(typeof value, typeof valueChange)

// type coersion
let x 
console.log(x, typeof x)

x = 8
console.log(x, typeof x)

x = x + " "
console.log(x, typeof x) //+-> converts to string 

x = x -2 //- ->Converts into number
console.log(x, typeof x)

x = !x

// !-> Not operator
// if 0-> true, else other numbers -> false
// null is also false value, undefined is also false
// function, objects -> true
// False value -> 0, -0, "", 0n, NaN, document.all

x = parseInt("123 Shreya") //convert first integer value of string to number
console.log(x, typeof x)