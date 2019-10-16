import React from 'react';

const SevenSix = () => {
  function inputHandler(input){
    if (typeof input !== 'object' || Object.keys(input).length < 3 || !Object.keys(input).includes('favMovie')){
      secondFunc(input);
    } else {
      console.log(thirdFunc(input));
    }
  }

  function secondFunc(input){
    if(typeof input !== 'object'){
      console.log('the input is not an object');
    }
    if (Object.keys(input).length < 3){
      console.log('the input doesn\'t have 3 properties');
    }
    if (!Object.keys(input).includes('favMovie')){
      console.log('the input doesn\'t contain a favMovie prop');
    }
  }

  function thirdFunc(input){
    let concatString = '';
    Object.keys(input).forEach(key => {
      concatString += key + input[key];
    })
    return concatString;
  }

  return(
    <button onClick={() => inputHandler({favPerson: 'Ghandi', favFood: 'tacos', favMovie: 'The Empire Strikes Back'})}>Click me for 07.06 solution</button>
  )
}

export default SevenSix;