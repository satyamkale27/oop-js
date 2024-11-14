class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  start() {
    this.isRunning = true;
    return `${this.make} ${this.model} is starting....`;
  }

  stop() {
    this.isRunning = false;
    return `${this.make} ${this.model} is stopping....`;
  }

  getInfo() {
    return `${this.year} ${this.make} ${this.model} - ${
      this.isRunning ? "Running" : "stopped"
    } `;
  }
}

const car1 = new Car("Toyota", "Car", 2020);

console.log(car1.getInfo());
