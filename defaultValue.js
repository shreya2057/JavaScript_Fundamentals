let user = "Shreya" //Global variable
function add(num1, num2){
    let lastName = "Shrestha" //local variable
    console.log(user)
    return num1 + num2
}

let result = add(2,3)
console.log(result)

function multiply(num1, num2, num3 = 1){
    return num1 * num2 * num3
}

console.log(multiply(2,3))

function check({user}={}){
    console.log(user)
}

check({user:"Shreya"})
