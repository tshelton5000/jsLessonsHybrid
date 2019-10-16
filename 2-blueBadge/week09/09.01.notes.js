/*
Announcements:
1)  Repls are now to be completed in Code Sandbox.  Your problem descriptions are 
    available in Canvas, and a separate sandbox should be created for each problem.
    Submit your completed sandboxes in a single message to me and Zach Saturday.
2)  The Node Server book is now available to be completed.  You should have the
    modules Node Server Intro through Node Server Tokenization completed by this 
    weekend.
3)  There are 2 videos available to watch, with a third coming Wednesday.  Don't
    worry about watching these videos until you've completed the installs from the 
    node server book.
4)  You guys are doing it!  React is hard, and you've made it successfully through 
    your first couple weeks of blue.  Nothing about this journey is easy, but the
    effort you put in now will pay dividends when you graduate.  Keep going!
*/

/*
Itinerary:
1)  build new package.json in play-server app
  {
    "name": "play-server",
    "version": "1.0.0",
    "description": "server for classroom lessons",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node ./node_modules/http-server/bin/http-server"
    },
    "author": "YOUR NAME HERE",
    "license": "MIT",
    "dependencies": {
      "bcryptjs": "^2.4.3",
      "body-parser": "^1.18.2",
      "dotenv": "^5.0.1",
      "express": "^4.16.3",
      "jsonwebtoken": "^8.2.0",
      "pg": "^7.4.1",
      "pg-hstore": "^2.3.2",
      "sequelize": "^4.37.0"
    }
  }
2)  npm install -g nodemon
  Will restart your server during development so changes are reflected in the running
  of your app
3)  npm install express
4)  create index.js file in root of app

  const express = require('express')
  const app = express()

  app.listen(3000, () => console.log('App is listening on 3000'))
  https://expressjs.com/en/4x/api.html#app.listen

5)  npm install dotenv
  dotenv allows .env files to be used privately within apps, storing to process.env

6)  Now create .env file and add PORT = 3000
  Change index.js to following:

  require('dotenv').config()
  
  app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`)) // BACK TICS!

7)  Create .gitignore file and add following:
  node_modules/
  *.env

8)  Add the following to the folder structure:
  server
    public
      index.html

  In index.html, add:
  <h1>This is working with a web server!</h1>

9)  In index.js, add:
  app.use(express.static(__dirname + '/public'))
  https://expressjs.com/en/4x/api.html#express.static
  console.log(__dirname)

  app.get('/', (req, res) => res.render('index'))
  https://expressjs.com/en/4x/api.html#res.render

10)  app.get('/play', (req, res) => res.send('I love to play all day!'))
  https://expressjs.com/en/4x/api.html#app.get.method

11)  Build playcontroller:
  const express = require('express')
  const router = express.Router();

  router.get('/', (req, res) => res.send('I love to play all day!'))
  https://expressjs.com/en/4x/api.html#router.METHOD

  module.exports = router;

12) re-wire index.js:
  //at top of file:
  const playcontroller = require('./controllers/playcontroller');

  //instead of app.get(...):
  app.use('/play', playcontroller);

13)  Install Postgres and PGAdmin
  https://www.postgresql.org/download/

14)  In PGAdmin, create new database => call it playtabase (make sure your postgreSQL password is implemented)

  Create db.js file and add:

  const Sequelize = require('sequelize')
  const sequelize = new Sequelize('playtabase', 'postgres', 'admin', {
    host: 'localhost', 
    dialect: 'postgres'
  })

  sequelize.authenticate() 
    .then(() => console.log('postgres db is connected'))
    .catch(err => console.log(err))

  module.exports = sequelize;

15)  Add models folder with play.js
  module.exports = (sequelize, DataTypes) => {
  const Play = sequelize.define('play', {
    nameOfHobby: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    duration: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    funFactor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    withTeam: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })

  return Play;
}

16)  Update playcontroller to following:
const express = require('express')
const router = express.Router();
const sequelize = require('../db')
const Play = sequelize.import('../models/play')

router.get('/', (req, res) => res.send('I love to play all day!'))

router.post('/new', (req, res) => {
  Play.create({
    nameOfHobby: req.body.nameOfHobby,
    duration: req.body.duration,
    funFactor: req.body.funFactor,
    withTeam: req.body.withTeam
  })
    .then(play => res.status(200).json(play))
    .catch(err => res.json(err))
})

module.exports = router;
*/