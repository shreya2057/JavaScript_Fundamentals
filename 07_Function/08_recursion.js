// Recursion -> Function calling itself.
//           -> It should have base condition or breaking point.

function factorial(n){

    // Base condition
    if(n===0){
        return 1;
    } else{
        return n * factorial(n-1);
    }
}

console.log(factorial(5));