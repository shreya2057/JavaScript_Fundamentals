// for-in loop -> used for iterating through objects properties

let programmer = {
    name: "Shreya Shrestha",
    tech: "JS",
    age: 23,
    device:{
        device_name: "Laptop",
        description: {
            brand: "Lenovo",
            ram: 8,
            cpu: "i7"
        }
    }
}

for(let key in programmer){
    console.log(key, programmer[key])
}

for(let check in programmer.device){
    console.log(check, programmer.device[check])
}