import React from 'react';

const SevenOne = () => {
  let inputObj = {
    propA: 'wolverine',
    propB: 'colossus'
  }
  
  let secondObj = {
    propA: 'cookies',
    propB: 'muffins'
  }
  
  function propSwapper(obj, firstProp, secondProp){ //obj = inputObj, firstProp = 'propA', 
                                                    //secondProp = 'propB'
    let returnObj = {};
    returnObj[firstProp] = obj[secondProp];
    returnObj[secondProp] = obj[firstProp];
    return returnObj;
  }

  return(
    <>
    <button onClick={() => console.log(propSwapper(inputObj, 'propA', 'propB'))}>Click me for 07.01 solution</button>
    </>
  )
}

export default SevenOne;