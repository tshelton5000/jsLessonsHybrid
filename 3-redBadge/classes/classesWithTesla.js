//introducing classes, properties, methods, prototype, static vs. dynamic
class TeslaModelS {
  zeroToSixty = 2.4;
  rangeInMiles = 370;
  cost = 80000;

  canIAfford(budget){
    return this.cost < budget;
  }

  logProperties(){
    console.log(`0 - 60 time of: ${this.zeroToSixty}, range in miles: ${this.rangeInMiles}, cost: $${this.cost}`)
  }
}

const sampleModelS = new TeslaModelS();

console.log(sampleModelS, sampleModelS.zeroToSixty);
console.log('I can afford the model S:' + sampleModelS.canIAfford(20000));
sampleModelS.logProperties();

//properties sit in the constructed object
console.log(sampleModelS);

//methods sit in the prototype of the class
console.log(teslaModelS.prototype);

//introducing constructors, getters, setters
class Tesla{
  externalTempInF = 80;

  constructor(zeroToSixty, rangeInMiles, cost){
    this.zeroToSixty = zeroToSixty;
    this.rangeInMiles = rangeInMiles;
    this.cost = cost;
  }

  canIAfford(budget){
    return this.cost < budget;
  }

  get externalTempInC(){
    return (this.externalTempInF - 32) * (5/9);
  }

  set externalTempInC(tempC){
    this.externalTempInF = tempC * (9/5) + 32;
  }

  logProperties(){
    console.log(`0 - 60 time of: ${this.zeroToSixty}, range in miles: ${this.rangeInMiles}, cost: $${this.cost}`)
  }
}

const modelS = new Tesla(2.4, 370, 80000);
console.log(modelS.externalTempInC);
modelS.externalTempInC = 50;
console.log(modelS);

const model3 = new Tesla(3.2, 310, 40000);
console.log(model3.externalTempInC);
model3.externalTempInC = 50;
console.log(model3);

//introducing inheritance, super

class MyTesla extends Tesla{
  constructor(zeroToSixty, rangeInMiles, cost, nickName, color){
    super(zeroToSixty, rangeInMiles, cost);
    this.nickName = nickName;
    this.color = color;
  }

  whyILoveIt(){
    console.log(`I love my Tesla, ${this.nickName}, because it\'s ${this.color}!`)
  }
}

const nancyDrew = new MyTesla(3.2, 310, 40000, 'nance', 'metallic purple');
console.log(this.zeroToSixty, this.nickName, this.cost);
nancyDrew.whyILoveIt();