import React, { useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Pies from './components/Pies/Pies';
import Auth from './components/Auth/Auth';
import './App.css';

const App = () => {
  const [sessionToken, setSessionToken] = useState(undefined);

  const viewConductor = () => {
    return sessionToken !== undefined ? <Pies/> : <Auth tokenHandler={storeSessionToken}/>
  }

  const storeSessionToken = (token) => {
    setSessionToken(token);
  }

  const removeSessionToken = () => {
    this.setState({sessionToken: undefined})
  }

  return (
    <div className="App">
      <Navbar logout={removeSessionToken}/>
      {viewConductor()}
    </div>
  );
}

export default App;
