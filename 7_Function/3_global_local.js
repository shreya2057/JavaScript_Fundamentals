// Global variable -> The variable that can be accessed from anywhere.

// Local variable -> The variable that is defined inside a block of code.
//                   and cannot be accessed outside the block of code.


var user = "user"   //Global variable
function userDetail(userName){
    // userName is the local variable
    console.log(userName)
    console.log(user)
}

userDetail("User Name")

function add(num1, num2){
    let lastName = "Shrestha" //local variable
    console.log(user)
    return num1 + num2
}

let result = add(2,3)
console.log(result)
