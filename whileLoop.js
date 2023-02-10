// loop => to do same things multiple times
// loop-> increment, counter and condition

// parts of a loop statement -> initialize, condition, increment

// while loop will check for the condition at first and if the condition is true then only it will execute
let i = 1
// if the value of i is 6, the statement inside the while loop will not execute even once
while(i<=5){
    console.log("Hi")
    i++
}
console.log(i) //at the end of while loop the value of i will be 6

// do while loop will execute the block at first and then check for the condition 
let k = 1
// do while loop with execute statement atleast once
do{
    console.log("Do while")
    k++
}while(k<=4)