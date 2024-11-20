// parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} makes a sound`);
  }
}

// child class

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor with name
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks`);
  }
}

const mydog = new Dog("rex", "German shepherd");
mydog.sound();
