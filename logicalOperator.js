// Logical Operator -> operation of boolean values
// And -> . => && if both condition is true then gives true value otherwise false
// Or -> + => || if one condition is true then gives true value otherwise false 
// Not -> ~ =>! for true value it gives false and vice versa
let x = 7, y = 8, z = 9
let resultAnd = x < y && x < z
let resultOr = x > y || x <z
let resultNot = !true
console.log(resultAnd, resultOr, resultNot)