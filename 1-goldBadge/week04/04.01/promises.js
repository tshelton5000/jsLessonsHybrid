//1)  start by showing students the taco fetch from the taco-randomizer app
// fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//   .then(res => res.json())
//   .then(json => console.log(json))

//2)  show students the value in using async-await with fetch
// async function slowResult(){
//   await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(json => console.log(json))
//   console.log('this is a message');
// }

// slowResult();

//3)  show students that the res variable is an object representing the taco results
// async function slowResult(){
//   await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
//     .then(res => res.json())
//     .then(res => {res.lolProperty = 'this is a random property!'; return res})
//     .then(json => console.log(json))
//   console.log('this is a message');
// }

// slowResult();