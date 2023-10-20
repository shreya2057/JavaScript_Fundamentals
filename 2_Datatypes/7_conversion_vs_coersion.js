// type conversion

// Converting number into string
let number = 12
console.log("\n" + "Changing into string")
console.log("The value of number is: " + number + " "+ "and type is: " 
            + typeof number)
console.log("After changing into string")
number = String(number) 
console.log("The value of number is: " + number + " "+ "and type is: " 
            + typeof number)

// Converting string into number 
let text = "12"
console.log("\n" + "Changing into number")
console.log("The value of text is: " + text + " "+ "and type is: " 
            + typeof text)
console.log("After changing into number")
text = Number(text) 
console.log("The value of text is: " + text + " "+ "and type is: " 
            + typeof text)

//Convert first integer value of string to number
console.log("\n" + "Convert first integer value of string to number")
let value = "123 Shreya"
console.log("The value of value is: " + value + " "+ "and type is: " 
            + typeof value)
value = parseInt(value) 
console.log("After changing into number")
console.log("The value of value is: " + value + " "+ "and type is: " 
            + typeof value)

// type coersion
let x 
console.log("\n" + "Undefined declaration")
console.log("The value of x is: " + x + " " + "and the type of x is: " 
            + typeof x)

x = 8
console.log("\n" + "Changing into number")
console.log("The value of x is: " + x + " " + "and the type of x is: " 
            + typeof x)

x = x + ""  //+-> converts to string 
console.log("\n" + "Changing into String by adding")
console.log("The value of x is: " + x + " " + "and the type of x is: " 
            + typeof x)
 
x = x - 2 //- ->Converts into number
console.log("\n" + "Changing into number by subtracting")
console.log("The value of x is: " + x + " " + "and the type of x is: " 
            + typeof x)

// Changing into boolean
// ! -> Not operator
//      True value = function, objects, numbers except 0
//      False value = 0, -0, "", 0n, NaN, document.all, undefined, null

x = !x
console.log("\n" + "Changing into boolean")
console.log("The value of x is: " + x + " " + "and the type of x is: " 
            + typeof x)
