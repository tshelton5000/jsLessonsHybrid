import React from 'react';

const SevenTwo = () => {
  const firstArr = [1, 2, 3, 4, 5];
  const secondArr = [1, 2, 3, 4, 5];

  function arrMult(first, second){
    if (first.length > 0 && second.length > 0 &&
        Array.isArray(first) && Array.isArray(second)){
        let returnArr = [];
        let smallerArr = first.length < second.length ? first : second;
        let biggerArr = first.length >= second.length ? first : second;
        for (let i = 0; i < smallerArr.length; i++){
          //multiply the values in my arrays and store them in returnArr
          returnArr.push(smallerArr[i]*biggerArr[i]);
        }
        for (let j = smallerArr.length; j < biggerArr.length; j++){
          returnArr.push(biggerArr[j]);
        }
        return returnArr;
    } else {
      return 'input arguments are invalid';
    }
  }

  return(
    <>
    <button onClick={() => console.log(arrMult(firstArr, secondArr))}>Click me for 07.02 solution</button>
    </>
  )
}

export default SevenTwo;