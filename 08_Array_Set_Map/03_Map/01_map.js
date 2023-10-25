//Map -> Collection of key value pair
//    -> The key and value can be of any datatype   

// Creating empty map
let myMap = new Map();

// Adding data to map
myMap.set("name", "Shreya");
myMap.set("age", 23);
myMap.set("tech", "JavaScript");

console.log(myMap)

// Getting all the keys of the map
console.log(myMap.keys());

// Iterating through maps
for(let [k,v] of myMap){
    console.log(k, " : ", v);
}

myMap.forEach((v,k) => {
    console.log(k, " : ", v);
});

// Checks whether the map has the key
console.log(myMap.has("age"))

// Gets the value of the key
console.log(myMap.get("age"))