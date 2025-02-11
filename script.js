class Car{
	constructor(make, model){
		this.make = make;
		this.model = model;
	}
}

Car.prototype.getMakeModel = function(){
	return `${this.make} ${this.model}`;
}

class SportCar extends Car{
	constructor(make , model , topSpeed){
		super(make, model);
		this.topSpeed = topSpeed
	}
}
SportCar.prototype.getTopSpeed = function(){
	return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
