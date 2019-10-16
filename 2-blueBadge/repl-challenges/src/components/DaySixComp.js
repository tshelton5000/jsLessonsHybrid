import React, {useState} from 'react';
import SetVarComp from './SetVarComp/SetVarComp';
import PropsComp from './PropsComp/PropsComp';

const DaySixComp = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [hobbies, setHobbies] = useState('');

  return (
    <div className="App">
      <h2>DaySixComp Below</h2>
      <SetVarComp setName={setName} setAge={setAge} setHobbies={setHobbies}/>
      <PropsComp name={name} age={age} hobbies={hobbies}/>
    </div>
  );
}

export default DaySixComp;