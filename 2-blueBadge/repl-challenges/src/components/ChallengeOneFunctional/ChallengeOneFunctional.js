import React from 'react';

const ChallengeOneFunctional = (props) => {
  return(
    <button onClick={() => console.log(props.stateVal)}>Click to log a state value</button>
  )
}

export default ChallengeOneFunctional;