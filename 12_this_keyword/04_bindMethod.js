let person = { name: "Name" };

function greet(greetings, message) {
  console.log(greetings + " " + this.name);
  console.log(message);
}

const bindFunction = greet.bind(person, "Hello");

bindFunction("How are you");
