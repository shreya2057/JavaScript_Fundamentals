// Object destructuring -> Allows to extract values from an object and 
//                         assign them to variables with matching property
//                         names.

const user = {
    name: "Name of the student",
    email: "Email of the student",
    username: "username"
}

const {name, email} = user

console.log(name)
console.log(email)
