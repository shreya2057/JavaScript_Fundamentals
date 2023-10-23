for(var i=0; i<5; i++){
    console.log(`Running for loop ${i}`)
}

var value = 3

while(value<10){
    console.log(`Running while loop ${value}`)
    value ++
}

var doLoop = 4

do{
    console.log(`Running do while loop ${doLoop}`)
} while(doLoop<4)

for(var j = 0; j<5; j++){
    if(j===3){
        console.log(`This is continue statement ${j}`)
        continue
    }
    console.log(`This is normal loop containing continue ${j}`)
}

for(var j = 0; j<5; j++){
    if(j===3){
        console.log(`This is break statement ${j}`)
        break
    }
    console.log(`This is normal loop containing break ${j}`)
}