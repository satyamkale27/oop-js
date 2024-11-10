const myObject = {
  city: "mumbai",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

function showCity() {
  console.log(this.city);
}

myObject.greet();

showCity.call(myObject); // by using call method i refer to myObject //
