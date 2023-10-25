// Break statement -> Used to jump out of the loop.
// Continue statement -> Used to break one iteration in the loop.
//                    -> If specified condition occurs the loop breaks
//                       and next iteration continues.

console.log("For loop containing continue statement")
for(var i = 0; i<5; i++){
    if(i===3){
        console.log("This is continue statement with i = " + i)
        continue;
    }
    console.log("i= " + i)
} 

console.log("For loop containing break statement")
for(var i = 5; i<10; i++){
    if(i===7){
        console.log("This is break statement with i= " + i)
        break;
    }
    console.log("i= " + i)
} 
