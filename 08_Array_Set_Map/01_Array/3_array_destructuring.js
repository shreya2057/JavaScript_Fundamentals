// Array Destructuring -> Allows to extract values from the array and
//                        assign them to variables based on their position

let num = [1,2,3]
let [a,b] = num     //a-> 0 index, b-> 1 index
console.log(a,b);

//Swapping number
let c = 5;
let d = 6; 
[c,d] = [d,c];
console.log(c,d);
