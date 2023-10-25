// Annonymous function -> Function that does not have a name.
//                     -> The annonymous function is assigned to a
//                        variable in function expression.

let add = function(num1, num2){
    return num1 + num2
}

let sum = add 
let result = sum(2,3)
console.log(result);