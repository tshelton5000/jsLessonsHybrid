import React from 'react';

const SetVarComp = ({setName, setAge, setHobbies}) => {
  return(
    <>
      <input onChange={(e) => setName(e.target.value)}/><br/>
      <input onChange={(e) => setAge(e.target.value)}/><br/>
      <input onChange={(e) => setHobbies(e.target.value)}/>
    </>
  )
}

export default SetVarComp;