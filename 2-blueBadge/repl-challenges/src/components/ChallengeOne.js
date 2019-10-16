import React, {useState} from 'react';
import ChallengeOneFunctional from './ChallengeOneFunctional/ChallengeOneFunctional';

const ChallengeOne = () => {
  const [name, setName] = useState('Paul OConnor');
  const [age, setAge] = useState(44);
  const [favColor, setFavColor] = useState('blue');

  function logState(){
    console.log(name, age, favColor);
  }

  return(
    <>
      <p>ChallengeOne Comp is below</p>
      {
        [name, age, favColor].map(stateVar => <ChallengeOneFunctional stateVal={stateVar}/>)
      }
    </>
  )
}

export default ChallengeOne;