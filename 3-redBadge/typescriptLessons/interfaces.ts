interface Car{
  wheels: number;
  name: string;
  hasAirBags: boolean;
}

let obj1: Car = {
  wheels: 10,
  name: 'Ford Fiesta',
  hasAirBags: false
}

interface Truck{
  fourWheelDrive: boolean;
  horses: number,
  cost: number,
  inBudget: (buget: number) => boolean
  name?: string
}

let obj2: Truck = {
  fourWheelDrive: true,
  horses: 250,
  cost: 45000,
  inBudget: (budget) => false,
  name: 'Escalade'
}

interface indexable{
  [index: number]: number
}

let newArr: indexable = [0, 1, 2, 3];

interface FoodInterface{
  ingredients: string[];
  reviewScore: number,
  haveEaten: boolean,
  personalMsg(): string
}

class Food implements FoodInterface{
  constructor(public ingredients: string[], 
      public reviewScore: number, 
      public haveEaten: boolean){}

  personalMsg = () => 'yes'
}

let burger: Food = new Food(['bun', 'cheese', 'meat', 'tomato'], 8, true);

