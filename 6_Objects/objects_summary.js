let user = {
    name: "Name",
    email: "Email",
    userName: "username123"
}

console.log(user.name)

for(var key in user){
    console.log(key, user[key])
}

delete user.userName
console.log(user)