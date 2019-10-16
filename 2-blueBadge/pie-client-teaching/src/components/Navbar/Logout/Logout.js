import React from 'react';

import logoutPic from '../../../assets/logout.jpeg';
import './Logout.css';

const Logout = (props) => {
  return(
    <img onClick={() => props.setSession(undefined)} id="logout" className="Logout" src={logoutPic} alt="Logout"/>
  )
}

export default Logout;