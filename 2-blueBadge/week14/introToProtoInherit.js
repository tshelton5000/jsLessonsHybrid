let cake = {
  flavor: 'chocolate',
  shape: 'rectangular',
  servings: 16
}

console.log(cake);
console.log(cake.toString());
console.log(cake.valueOf());
console.log(Object.getPrototypeOf(cake));

let newObj = {
  newMethod(){
    console.log('this is great!')
  }
}
Object.setPrototypeOf(cake, newObj);
cake.newMethod();
console.log(Object.getPrototypeOf(cake));
console.log(Object.getPrototypeOf(newObj))