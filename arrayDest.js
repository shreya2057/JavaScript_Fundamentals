// Array Destructuring
let num = [1,2,3]
let [a,b] = num
console.log(a,b);

//Swapping number
let c = 5;
let d = 6; 
[c,d] = [d,c];
console.log(c,d);

let words = "My name is Shreya Shrestha".split(" ");
console.log(words);
let [e,f,g, ...h] = words;