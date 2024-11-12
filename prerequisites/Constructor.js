/* 
note:-
 A constructor is a special method used to initialize objects 
1)Creates a new instance of a class
2)Sets initial values for object properties
3)Runs when the new keyword is used
 */

class Car {
  // parameterised constructor //
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
  }
}

const car1 = new Car("BMW", "white");
console.log(car1); // Before starting car //
car1.start();
console.log(car1); // after starting car //

// Accessibility of let  vs  this  //

class Example {
  constructor() {
    this.value = 40; // ✓ Accessible throughout the class
    let value = 40; // ✗ Only accessible in constructor
  }

  method() {
    console.log(this.value); // ✓ Works: 40
    console.log(value); // ✗ Error: value not defined
  }
}

const example1 = new Example();
example1.method();
