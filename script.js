class Car{
	constructor(make, model){
		this.make = make;
		this.model = model;
	}
}

Car.prototype.getMakeModel = function{
	return `${this.make} ${this.model}`;
}

class SportCar extends Car{
	constructor(make , model , toSpeed){
		super(make, model);
		this.toSpeed = tp Speed
	}
}
SportCar.prototype.getTopSpeed = function(){
	return this.toSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
