// objectName.constructor -> gives the type of object

var array = new Array()
if(array.constructor === Array){
    console.log("The type of variable array is Array")
}
console.log(array.constructor)

var set = new Set()
if(set.constructor === Set){
    console.log("The type of variable set is Set")
}
console.log(set.constructor)

var map = new Map()
if(map.constructor === Map){
    console.log("The type of variable map is Map")
}
console.log(map.constructor)