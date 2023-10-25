var result
var x = 60
var y = 60

if(x>y){
    result = "X"
} else if (x == y){
    result = "Equal"
} else{
    result = "Y"
}


switch (result){
    case "X":
        console.log("x is greater")
        break
    
    case "Equal":
        console.log("x and y are equal")
        break
    
    default:
        console.log("y is greater")
        break
        
}

var equal = (x===y) ? true : false
console.log(`The value of equal is ${equal}`)