// setInterval -> It is a built-in function that allows to repeatedly 
//                execute a specified function at specified interval.
//             -> It is commonly used for tasks like running a function to
//                update a part of a web page, creating periodic checks
//                of implementing animations.
//             -> To stop the interval (i.e to stop the repeated execution)
//                of the function), the clearInterval function is used.

// Syntax
// ------
// const intervalId = setInterval(function, delay)
// clearInterval(intervalId)
// where,
//     -> function -> The function that is to be executed at specified 
//                    interval
//     -> delay -> The time in milliseconds between the each execution of
//                 function

var count = 0

function loading(){
    const interval = setInterval(()=>{
        if(count===6){
            clearInterval(interval)
        }
        console.log("Loading " +  count)
        count++
        
    }, 1000)
}

loading()
