// DataTypes are of 2 types
// Primitive and objects
// Primitive -> Number, String, Boolean, Null, Undefined and Symbol

// Nummber -> multiplication, division, add, subtarct etc
// BigInt -> for very large number -> it can be used if precision doesn't want to be compromised
// Sometimes for large number the number is truncated and if precision in important BigInt is used
// number can be integer, floating point, decimal, infinity
// range of infinity is -infinity to infinity
// typeof keyword can be used find the datatype of teh variable
// any number system can be used such as hexadecimal, octal, binary etc
let num = 8
console.log(typeof num)

let hexNum = 0xff //0x -> for hexadecimal

let exponential = 1.5e12 //-> 1.5 * 10^12
console.log(exponential)

// to distinguish the number of 0's easily in a number we use , 
// in js we use _

let lakh = 10_00_000
console.log(lakh)

console.log(5/0) //infinity
console.log(Number.MAX_VALUE) //gives maximum number that is supported

let bigNo = 100000000000000000222n //BigInt

// to add number in bigInt
console.log(bigNo+2n) //adding 2 to BigInt
console.log(bigNo)

// String
// to cancel meaning of the quote add slash before quote
// String concatenation using + 
let info = "Shreya \"Info\""
console.log(info)

//escape
// \t-> Tab, \n-> new line, \b-> escape character

// boolean
let value = true

let news = null

let news2 //undefined

// NaN -> not a number (operation of number with other data type)