/**************************
REACT CHALLENGES SETUP
**************************/
/*
//have students build out a react-challenges app like so:
JavaScriptDec2018
  blue-badge-challenges
    arrays.js
    elevenfiftystring.js
    object-prop-swap.js
    react-challenges
      node_modules
      public
      src
      ...
  javaScriptLibrary

//have students update their package.json to look like the following:
{
  "name": "react-fundamentals",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "aframe": "^0.7.1",
    "aframe-animation-component": "^4.0.0-beta9",
    "aframe-particle-system-component": "^1.0.11",
    "aframe-react": "^4.3.0",
    "axios": "^0.17.1",
    "babel-polyfill": "^6.26.0",
    "bootstrap": "^4.0.0",
    "lodash": "^4.17.4",
    "node-sass-chokidar": "0.0.3",
    "npm-run-all": "^4.1.2",
    "react": "^16.2.0",
    "react-codepen": "^0.1.0",
    "react-dom": "^16.2.0",
    "react-icons": "^2.2.7",
    "react-router-dom": "^4.2.2",
    "react-spinners": "^0.2.5",
    "reactstrap": "^5.0.0-alpha.4",
    "youtube-api-search": "0.0.5"
  },
  "devDependencies": {
    "react-scripts": "^1.1.0"
  },
  "scripts": {
    "build-css": "node-sass-chokidar --include-path ./src/styles --include-path ./node_modules src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
//npm install once they've copy-pasted to package.json

//update folder structure to look like the following:
src
  components
    DayOneComp
      DayOneComp.js
    DayTwoComp
      DayTwoComp.js
    DayThreeComp
      DayThreeComp.js
    Sidebar.js
//we can leave those empty for now

//update App.js to look like the following:
import React, { Component } from 'react';

import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Sidebar/>
        </Router>
      </div>
    );
  }
}

export default App;

//update Sidebar.js to look like the following:
import React from 'react';

import {Route, Link} from 'react-router-dom';
import DayOneComp from './DayOneComp/DayOneComp';
import DayTwoComp from './DayTwoComp/DayTwoComp';
import DayThreeComp from './DayThreeComp/DayThreeComp';

const Sidebar = () => {
  return(
    <div>
      <div>
        <ul>
          <li><Link to="/day-one-challenge">Day One Challenge</Link></li>
          <li><Link to="/day-two-challenge">Day Two Challenge</Link></li>
          <li><Link to="/day-three-challenge">Day Three Challenge</Link></li>
        </ul>
      </div>
      <div>
        <Route path="/day-one-challenge" exact component={DayOneComp}/>
        <Route path="/day-two-challenge" exact component={DayTwoComp}/>
        <Route path="/day-three-challenge" exact component={DayThreeComp}/>
      </div>
    </div>
  )
}

export default Sidebar;

//update DayOneComp.js to look like the following:
import React from 'react';

const DayOneComp = (props) => {
  return(
    <h1>This is a day 1 component!</h1>
  )
}

export default DayOneComp;

//update DayTwoComp.js to look like the following:
import React from 'react';

const DayTwoComp = (props) => {
  return(
    <h1>This is a day 2 component!</h1>
  )
}

export default DayTwoComp;

//update DayThreeComp.js to look like the following:
import React from 'react';

const DayThreeComp = (props) => {
  return(
    <h1>This is a day 3 component!</h1>
  )
}

export default DayThreeComp;

//have students npm start to see the app
*/


/*******************
DAY ONE REACT CHALLENGE
*******************/

/*
BRONZE LEVEL:
Convert the 'DayOneComp' component to a class component.
Use the constructor lifecycle method to initialize state for
this component.  State should hold 3 key-value pairs:
name: 'Paul OConnor',
age: 44,
favColor: 'blue'

Inside the render method, build a button.  This button should
console.log() the state object when it gets clicked.  Good luck!

SILVER LEVEL:
Do all of the above, but make a new functional component called
'DayOneFunctional' (careful with folder stucture!).  Call this component
three times inside the 'DayOneComp' render method.  Each 'DayOneFunctional'
component call should be passed a prop, the first is passed 'name',
the second 'age', and the third 'favColor'.  Each DayOneFunctional should 
display the prop it gets passed.  Good luck!

GOLD LEVEL:
Do all of the above, but refactor your render so that instead of calling
DayOneFunctional three times, you call a variable array inside of render which 
displays the .map() results of that variable.  Each DayOneFunctional component
should have its prop defined dynamically.  You shouldn't have to make a 'name',
'age', and 'favColor' prop by hard-coding the their names.  Good luck!
*/

/**************************
POSTGRES AND PGADMIN INSTALL
**************************/

/**************************
PIE API WALKTHROUGH 1 - NPM, EXPRESS, POSTMAN
**************************/
/*
Folder Structure:
  pieApi
    client
    server
Navigate to server
npm init => explain what package.json is doing 
Will see this in package.json (add start and dev to scripts): 
{
  "name": "pieapi",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    // New code below
    "start": "node index.js",
    "dev": "nodemon"
  },
  "author": "",
  "license": "ISC"
}
Explain what start script does (npm start) and what dev does (nodemon)
Go ahead and npm install --save-dev nodemon  (will create a devDependencies key with nodemon inside)
Explain what nodemon does 
npm install express
Explain difference between opening a file path vs. running a server
  Server has hot reloading
  
  More importantly:
    Explain how the internet works
      client <=> server <=> db
      req and res (recall API interaction)
Create index.js file at root level of server
*/

const express = require('express')
const app = express()

app.listen(3000, () => console.log('App is listening on 3000'))

/*
Now create .env file and add PORT = 3000
npm install dotenv
Change index.js to following
*/
require('dotenv').config()

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`)) // BACK TICS!

/*
Create .gitignore file and add following:
  node_modules/
  *.env
Build out own server
Add the following to the folder structure:
server
  public
    index.html
In index.html, add:
<h1>This is working with a web server!</h1>
In index.js, add:
*/

app.use(express.static(__dirname + '/public'))
console.log(__dirname)

app.get('/', (req, res) => res.render('index'))

/*
Open index.html in both local path and server (npm run dev)
In Postman, run to see html in output section
In index.js, add:
*/

app.get('/pies', (req, res) => res.send('I love pie!'))

/*
Run in Postman
Now add a controllers folder with piecontroller.js
In piecontroller.js add:
*/

const express = require('express')
const router = express.Router()

// copy from index.js:
app.get('/pies', (req, res) => res.send('I love pie!'))
// change app to router
router.get('/', (req, res) => res.send('I love pie!'))
// explain what the '/' does (localhost:3000/pies/)

// and add to bottom:
module.exports = router

//In index.js, change: 

app.get('/pies', (req, res) => res.send('I love pie!'))
// to
app.use('/pies', pies)
// add add at time of index.js:
const pies = require('./controllers/piecontroller')

// Run in postman

/*********************
ALECX'S NYT WALKTHROUGH
*********************/

/* Node server gitbook Chs. 0-4 */