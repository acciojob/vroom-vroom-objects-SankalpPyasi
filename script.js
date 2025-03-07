// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + " " + this.model;
};

// SportsCar constructor function (inherits from Car)
function SportsCar(make, model, topSpeed) {
    // Call Car constructor
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add method specific to SportsCar
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed + " mph";
};

// Function to display car information in the HTML page
function displayCars() {
    const outputDiv = document.getElementById('output');

    // Create instances
    const regularCar = new Car("Toyota", "Corolla");
    const sportsCar = new SportsCar("Ferrari", "488 Spider", 211);

    // Build output message
    const message = `
        <strong>Regular Car:</strong><br>
        Make & Model: ${regularCar.getMakeModel()}<br><br>

        <strong>Sports Car:</strong><br>
        Make & Model: ${sportsCar.getMakeModel()}<br>
        Top Speed: ${sportsCar.getTopSpeed()}<br>
    `;

    // Update the page
    outputDiv.innerHTML = message;
}
