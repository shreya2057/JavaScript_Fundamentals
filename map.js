//Map is collection of key value pair

let map = new Map();
map.set("name", "Shreya");
map.set("age", 23);
map.set("tech", "JavaScript");
console.log(map.keys());

for(let [k,v] of map){
    console.log(k, " : ", v);
}

map.forEach((v,k) => {
    console.log(k, " : ", v);
});