// Function -> block of reusable code
// 2 components -> defining a function and calling a function

function add(){
    let a = 2
    let b = 3
    let c = a + b
    console.log(c) 
}


add()

// Returning a value
function multiply(){
    let a = 3
    let b = 4
    return a*b
}

let mult = multiply()
console.log(mult)

function divide(a){
    let b = a/3
    console.log(b)
}

divide(9)