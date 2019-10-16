import React, { useState } from "react";

const stylez = {
  color: "red",
  fontFamily: "fantasy"
};

const Display = ({ title, desc }) => {
  const [toggle, setToggle] = useState(title);

  function toggler() {
    if (toggle === title) {
      setToggle(desc);
    } else {
      setToggle(title);
    }
  }

  return (
    <div>
      <p style={stylez}>{toggle}</p>
      <button onClick={toggler}>This is a button</button>
    </div>
  );
};

export default Display;
