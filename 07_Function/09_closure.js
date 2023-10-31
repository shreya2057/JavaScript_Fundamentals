// Closure -> Function inside another function
//         -> It is used when behaviour needs to be extended such as pass 
//            variables, methods, array from outer function to inner 
//            function.


function parent_function(){

    let message = "hello"

    function child_function(){
        console.log(message)
    }

    return child_function
}

const function_value = parent_function()

function_value()