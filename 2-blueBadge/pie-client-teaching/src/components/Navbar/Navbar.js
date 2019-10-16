import React from 'react';

import piePic from '../../assets/pumpkin-pie.jpg';
import Logout from './Logout/Logout';
import './Navbar.css';

const Navbar = (props) => {
  return(
    <nav>
      <img id='piePic' src={piePic} alt="Pie Picture"/>
      <Logout setSession={props.setSession}/>
    </nav>
  )
}

export default Navbar;