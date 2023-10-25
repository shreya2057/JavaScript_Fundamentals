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

console.log(programmer.device.description.brand)
console.log(programmer.device.description.brand?.length)//if brand property exists then only print length

delete programmer.device
console.log(programmer)