// this refers to the current object

let message = {
    sender: "Shreya Shrestha",
    receiver: "Jack",
    sent: function(){
        console.log(this.sender)    //this represents the object message
    }
}

message.sent()

let myLaptop = {
    ram: 16,
    cpu: "i7",
    brand: "Hp",
    getBrand: function (){
        console.log(this.brand);
    },
    compare: function(other){
        if(this.cpu > other.cpu){
            this.getBrand()
        }else{
            other.getBrand()
        }
    }
}

let other = {
    ram: 8,
    cpu: "i9",
    brand: "Hp",
    getBrand: function (){
        console.log(this.brand);
    }
}

myLaptop.compare(other)