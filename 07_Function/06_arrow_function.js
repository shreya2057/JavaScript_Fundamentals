// Arrow function -> Reduces lots of codes and makes code more readable

var printValue = (value1, value2)=>{
    var updatedValue = [value1 + 1, value2 + 1]
    console.log("The passed value are " + value1 + ", " + value2)
    return updatedValue
}

var value = printValue(3, 4)
console.log("The updated value is " + value)


// If there is just return statements and no other statements in the 
// function curly bracket is not needed

let add = (num1, num2) => num1 + num2

console.log("The sum is " + add(3,4))


// If there is only one argument, no round bracket is needed

let error = errorMsg => {
    console.log(errorMsg)
}

console.log("The data has not been found")