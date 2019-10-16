import React, {useState} from 'react';

import './Auth.css';

const Auth = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    let authURL = login ? 'http://localhost:3000/auth/signin' : 'http://localhost:3000/auth/signup'
    fetch(authURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstName, lastName, email, password, login})
    })
    .then(res => res.json())
    .then(json => props.tokenHandler(json.sessionToken))
    .catch(err => console.log(err));
  }

  const loginToggle = (event) => {
    event.preventDefault();
    setLogin(!login);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  const title = () => login ? "Login" : "Signup";

  const signupFields = () => !login 
    ? (
      <>
        <label htmlFor="firstName">First Name:</label><br/>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.targe.value)}/><br/>
        <label htmlFor="lastName">Last Name:</label><br/>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/>
      </>
    ) 
    : null

  return(
    <form className="cardLike" onSubmit={handleSubmit}>
      <h1>{title()}</h1>
      <label htmlFor="email">Email:</label><br/>
      <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
      <label htmlFor="password">Password:</label><br/>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
      {signupFields()}
      <button onClick={loginToggle}>Login/Signup Toggle</button><br/>
      <button type="submit">Submit User Data</button>
    </form>
  )
}

export default Auth;