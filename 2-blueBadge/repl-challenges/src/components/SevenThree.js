import React from 'react';

const SevenThree = () => {
  function stringFormatter(str){
    if (typeof str !== 'string' || str.length > 29){
      throw new Error('string does not match input requirements');
    }
    let strArr = str.trim().split(' ');
    return strArr.map(word => (word[0].toUpperCase() + word.slice(1, word.length))).join(' ');
  }
  
  function logOnClick(){
    try{
      console.log(stringFormatter('this is a fancy string!'));
    } catch(e){
      console.log(e);
    }
  }

  return(
    <>
    <button onClick={() => logOnClick()}>Click me for 07.03 solution</button>
    </>
  )
}

export default SevenThree;