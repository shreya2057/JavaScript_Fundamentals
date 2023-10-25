// Datatype
// Consists of properties that are separated by comma
// Key value pair
let input = "age"

let student = {
    name: "Shreya Shrestha",
    grade: 'Bachelor',
    age: 23,
    'work exp': 4
}

// accessing the properties of object
console.log(student)
console.log(typeof student)
console.log(student.name)
console.log(student['grade'])
console.log(student['work exp']) //for this square bracket must be used
console.log(student[input])