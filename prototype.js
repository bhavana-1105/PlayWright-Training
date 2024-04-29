const vehicleProto = {
    drive() {
      return `The ${this.name} is driving.`;
    }
  };

function Vehicle(name) {
this.name = name;
}

Vehicle.prototype = vehicleProto;

const carProto = Object.create(vehicleProto);
carProto.honk = () => `The ${this.name} is honking.`;

function Car(name, model) {
Vehicle.call(this, name);
this.model = model;
}

Car.prototype = carProto;

const sportsCarProto = Object.create(carProto);
sportsCarProto.speed = 200;

function SportsCar(name, model, turbo) {
Car.call(this, name, model);
this.turbo = turbo;
}

SportsCar.prototype = sportsCarProto;

const myCar = new SportsCar('Ferrari', '488', true);

console.log(myCar.drive()); 
console.log(myCar.honk()); 
console.log(myCar.speed); 