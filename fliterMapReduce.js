let num = [1,2,3,4,5,6];

let result = num.filter(n => n%2===0).map(n=> n*2).reduce((a,b)=>a+b);
console.log(result)