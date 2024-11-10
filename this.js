const myObject = {
  city: "mumbai",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },

  namaste: () => {
    console.log(`namaste ${this.city}`); // undefined because  Arrow functions do not have their own this context //
  },
};

function showCity() {
  console.log(this.city);
}

myObject.greet();
myObject.namaste(); // undefined because  Arrow functions do not have their own this context // // so it points toward global object, and not toward myObject, and in my example there is no global object that has city //

showCity.call(myObject); // by using call method i refer to myObject //
