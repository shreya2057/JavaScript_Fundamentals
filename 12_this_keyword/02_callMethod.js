let person = { name: "Name" };

function greet(greetings) {
  console.log(greetings + " " + this.name);
}

greet.call(person, "Hello");
