// DataTypes are of 2 types
// Primitive and objects
// Primitive -> Number, String, Boolean, Null, Undefined and Symbol

// Nummber -> multiplication, division, add, subtarct etc.
//         -> Number can be integer, floating point, decimal, infinity.
//         -> Any number system can be used such as hexadecimal, octal, 
//            binary etc.

// BigInt -> Used to define very large number.
//        -> The large number is often truncated.
//        -> It can be used if precision doesn't want to be compromised.

let bigNo = 100000000000000000222n //BigInt
console.log("BigInt")
console.log(bigNo)

// To add number in BigInt
let addition = bigNo + 2n
console.log("Adding 2 in BigInt: " + addition + "\n") //adding 2 to BigInt

// Hexadecimal Number -> //0x is used for hexadecimal
let hexNum = 0xff 
console.log("Hexadecimal Number: 0xff")
console.log(hexNum + "\n")

// Exponential number -> 1.5 * 10^12
let exponential = 1.5e12 
console.log("Representing exponential number: 1.5 * 10^12")
console.log(exponential+"\n")

// Separting numbers -> To distinguish the number of 0's easily in a 
//                      number system we use, in JavaScript we use '_'
//                      instead of comma (,)

let lakh = 10_00_000
console.log("Seperating 0's in number system: 10 lakh")
console.log(lakh + "\n")

// Infinity -> Range of infinity is -infinity to infinity.
console.log("Infinity number")
console.log(5/0 + "\n") //infinity

//MAX_VALUE -> Gives maximum number that is supported.
console.log("Maximum number supported")
console.log(Number.MAX_VALUE + "\n") 

// String -> To add inverted comma in the string,
//           slash is added before quote.
console.log("Adding quote")
let info = "She said \"It is raining\""
console.log(info + "\n")

//Concatenation -> String concatenation using + 
let greet = "Hello!"
let user = "user"
console.log("Concatenation of string")
console.log(greet + " " + user + "\n")

// Boolean -> true or false
let boolValue = true
console.log("Boolean")
console.log("boolValue is: " + boolValue + "\n")

// Null value
let nullValue = null
console.log("Null")
console.log("nullValue is: " + nullValue + "\n")

//  undefined value
let undefinedValue
console.log("undefinedValue is: " + undefinedValue + "\n") 

// NaN -> not a number (operation of number with other data type)
let nan = 123 * "true"
console.log("The value of nan is: " + nan)