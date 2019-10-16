import React, { useState, useEffect } from "react";

import Display from "./Display/Display";

const stylez = {
  color: "blue",
  backgroundColor: "yellow",
  fontFamily: "cursive"
};

const DayTwoComp = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then(films => films.json())
      .then(json => setState(json))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2 style={stylez}>This is the DayTwoComp display</h2>
      {state.map(el => (
        <Display key={el.title} title={el.title} desc={el.description} />
      ))}
    </div>
  );
};

export default DayTwoComp;