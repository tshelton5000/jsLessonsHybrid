import React from 'react';

const SevenFour = () => {
  let sampObj = {
    keyA: 'tyler',
    keyB: 'michael',
    keyC: 'shelton',
    keyD: 'esquire'
  }

  function altAddSub(obj){
    let total = 0;
    Object.keys(obj).forEach((key, i) => {
      i % 2 === 0 ? total += obj[key].length : total -= obj[key].length;
    })
    console.log(total);
  }

  return(
    <button onClick={() => altAddSub(sampObj)}>Click me for 07.04 solution</button>
  )
}

export default SevenFour;