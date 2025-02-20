// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method to get car details
Car.prototype.getDetails = function() {
    return `Car: ${this.make} ${this.model}`;
};

// SportsCar constructor function inheriting from Car
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call parent constructor
    this.topSpeed = topSpeed;
}

// Inheriting Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method to get sports car details
SportsCar.prototype.getSportsCarDetails = function() {
    return `${this.getDetails()}, Top Speed: ${this.topSpeed} km/h`;
};

// Example usage
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getDetails());

const mySportsCar = new SportsCar("Ferrari", "488", 330);
console.log(mySportsCar.getSportsCarDetails());
