// this refers to the current object

let message = {
    sender: "Shreya Shrestha",
    receiver: "Jack",
    sent: function(){
        console.log(this.sender)    //this represents the object message
    }
}

message.sent()