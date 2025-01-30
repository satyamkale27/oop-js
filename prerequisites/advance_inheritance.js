class car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return `I have a ` + this.carname;
  }
}

class Model extends car {
  constructor(brand, mod) {
    super(brand);
    // super Calls the Car class constructor and initializes the carname
    // The super(brand) call passes 'Toyota' to the Car class constructor.
    // Inside the Car constructor, this.carname = 'Toyota' gets executed, setting the carname property on the new instance.
    // Now, the instance of Model (which is also an instance of Car) has the carname property with the value 'Toyota'.

    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}

const myCar = new Model("Toyota", "Corolla");
console.log(myCar.show());

// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }

//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//      // No constructor in Model class
//   // No need for super() because we're not adding any new properties // no constructor used
//   show() {
//     return this.present() + ', it is a Model';
//   }
// }

// const myCar = new Model('Toyota');
// console.log(myCar.present()); // Outputs: I have a Toyota
// console.log(myCar.show());    // Outputs: I have a Toyota, it is a Model

// note*
// The Model class does not have a constructor. Therefore, JavaScript will automatically call super() in the background.

// The Model class inherits the present() method from the Car class and adds its own show() method.
// This works fine without explicitly calling super() in the constructor because Model doesn’t need to pass arguments to the Car constructor.

// Methods are inherited automatically when a class extends another class, regardless of whether super() is explicitly called or not.
// super() is only needed in the constructor of the subclass when you need to invoke the parent class's constructor (to initialize parent properties). If your subclass doesn't need to do this, you can skip super() and still inherit the parent class's methods.
