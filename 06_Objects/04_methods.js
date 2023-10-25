// Function inside the object is called method

let message = {
    sender: "Shreya Shrestha",
    receiver: "Jack",
    sent: function(){
        console.log("Message delivered")
    }
}

message.sent()