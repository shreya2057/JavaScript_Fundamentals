// Spread operator -> '...'
//                 -> Feature in JavaScript that allows to split an 
//                    iterable(eg-: array or string) into individual 
//                    elements.
//                 -> It is used in variety of context to make working
//                    with data structures more convinient.

// Use cases
// ---------

// Spreading elements into arrays
// ------------------------------
// -> used to concatenate arrays or create a copy of an array.

const number = [1, 2, 3]
const char = ['a', 'b', 'c']
const array = [...number,...char]
console.log(array)

// Spreading elements into objects
// -------------------------------
// -> used to merge objects or create copies.

const studentDetail = {
    name: "Name of the student",
    age: "Age of the student",
    dept: "Deparment of the student"
}

const course = {
    courseCode: "Course code",
    instructor: "Instructor of the code",
    credit: "Course credit"
}

const details = {...studentDetail,...course}

console.log(details)

// Spreading string
// ----------------
// -> splitting a string into individual characters, creating an array of
//    characters.

const words = "World"
const world = [...words]
console.log(world)