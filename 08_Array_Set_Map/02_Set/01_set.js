// Set -> Consists of unique values 
//     -> Cannot access the elements using index
//     -> Can have values of mix datatypes

let set = new Set("bookkeeper");
console.log(set);

let num = new Set();
num.add(3);
num.add(4);
num.add(3);
num.add(5);
num.add(6);
console.log(num);

num.forEach(n=>{
    console.log(n)
})

// .has(Value)-> search whether the value is in set or not
console.log(num.has(3))