// Default value -> While calling the function if the argument is not 
//                  passed, it might create an error.
//               -> In that case default value is assigned.
//               -> If the argument is not passed while calling function 
//                  default value is assigned to the argument and if 
//                  argument is passed then that value is assigned.

function multiply(num1, num2, num3 = 1){
    return num1 * num2 * num3
}

console.log(multiply(2,3))