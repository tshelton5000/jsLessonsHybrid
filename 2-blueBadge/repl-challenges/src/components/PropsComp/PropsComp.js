import React from 'react';

const PropsComp = ({name, age, hobbies}) => {
  return(
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobbies}</h3>
    </div>
  )
}

export default PropsComp;