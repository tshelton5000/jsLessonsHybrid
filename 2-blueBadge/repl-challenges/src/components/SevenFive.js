import React from 'react';

const SevenFive = () => {
  function arrayManipulator(numArray){
    let oddNums = numArray.filter(num => num%2 === 1);
    let oddNumProduct = oddNums.reduce((accumulator, odd) => accumulator*odd);
    return oddNumProduct;
  }
  
  function acceptMovies(movieArray){
    let arraysOfWords = movieArray.map(movieTitle => movieTitle.split(' '));
    let acceptedTitles = arraysOfWords.filter((title, i) => title.length + i >= 5);
    let rejoinedTitles = acceptedTitles.map(title => title.join(' '));
    return rejoinedTitles;
  }

  function funcLogger(){
    let firstLog = arrayManipulator([1,2,3,4,5]);
    let secondLog = acceptMovies(['The Empire Strikes Back', 'Jurassic Park', 'The Wizard of Oz', 'The Good, the Bad, and the Ugly']);
    console.log(firstLog, secondLog);
  }

  return(
    <button onClick={funcLogger}>Click me for 07.05 solution</button>
  )
}

export default SevenFive;