class Vehicle{
  constructor(make, model, year, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }

  printSpecs(){
    console.log(this.make, this.model, this.year);
  }

  printOwner(){
    console.log(this.owner);
  }
}

let cadillac = new Vehicle('Cadillac', 'DeVille', 1975, 'Isaac');
cadillac.printSpecs();
cadillac.printOwner();
console.log(cadillac);
console.log(Vehicle);
Vehicle.prototype.printSpecs();

class Truck extends Vehicle{
  constructor(make, model, year, owner, fWDrive){
    super(make, model, year, owner);
    this.fWDrive = fWDrive;
  }

  isTruckFun(){
    console.log('this is a truck.  of course it\'s fun!');
  }
}

let cherokee = new Truck('Jeep', 'Cherokee', 2000, 'Holly', true);
console.log(cherokee);
cherokee.isTruckFun();
console.log(Truck);
console.log(Truck.prototype);