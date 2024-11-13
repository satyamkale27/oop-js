/*

Every JavaScript object has a prototype property
Prototypes allow objects to inherit properties and methods from other objects
They form the basis of inheritance in JavaScript


*/

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  return `Hello, I'm ${this.name}`;
};

const person1 = new Person("satyam");

console.log(person1.sayHello());
console.log(person1.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("sayHello"));
