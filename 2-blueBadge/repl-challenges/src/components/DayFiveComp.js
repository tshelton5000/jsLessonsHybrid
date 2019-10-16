import React, {useState} from 'react';

const DayFiveComp = () => {
  const [ranData, setRanData] = useState([]);

  function addData(){
    setRanData(ranData.concat(Math.round(Math.random()*100)))
  }
  
  function removeData(){
    setRanData(ranData.slice(0, ranData.length - 1));
  }

  return (
    <div className="App">
      <h2>DayFiveComp Below</h2>
      <button onClick={addData}>Add a datum!</button>
      <button onClick={removeData}>Remove a datum!</button>
      {ranData.map(el => <p>{el}</p>)}
    </div>
  );
}

export default DayFiveComp;