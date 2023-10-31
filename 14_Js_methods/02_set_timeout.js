// setTimeout -> It is the built-in function that allows to execute a 
//               specified function or piece of code after specified delay.
//            -> It is often used for implementing tasks like schduling a 
//               function after certain period or creading delays in code
//               execution.

// Syntax
// ------
// setTimeout(function, delay)
// where,
//     -> function -> The function or code to be executed after specified
//                    delay.
//     -> delay -> The time in milliseconds to wait before execution

setTimeout(()=>{
    console.log("Hello!")
}, 2000)