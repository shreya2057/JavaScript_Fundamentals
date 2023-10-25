// Break statement is used to jump out of the loop
/* Continue statement is used to break one iteration in the loop if the 
    specified condition occurs abd continues next iteration */
for(var i = 0; i<5; i++){
    if(i===3){
        continue;
    }
    console.log("Continue " + i)
} 


for(var i = 5; i<10; i++){
    if(i===7){
        break;
    }
    console.log("Break " + i)
} 
