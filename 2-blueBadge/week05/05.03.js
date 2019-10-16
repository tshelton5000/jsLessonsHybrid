/*********************
DAY 2 REACT CHALLENGE
*********************/

/* 
    REACT CHALLENGE DAY TWO
    TOPICS HIT:: FETCH() MAP() AND STYLE PROPS

    Bronze--
    In the Day Two component, create a class component.
    That component should use a .fetch() to reach out to the studio ghibli api and return 
    information about comic strips.  Store that information in the component's state, 
    then have it print to the console when state has updated with the studio ghibli data.

    Add an <h2></h2> and use a style prop to style the <h2></h2>.

    Note that styling and grabbing api data function independently!

    use this url for accessing the ghibli api:
    https://ghibliapi.herokuapp.com/films/

    Silver-- 
    Create a functional component called Display
    Use .map() to call your Display component multiple times, 
    with each Display responsible for showing the name from a film to the webpage.
    Use a styling prop to style Display's appearance

    Gold--
    Have your Display Functional Component passed a second prop, this time for the film's description.
    Add a button inside the functional component that will toggle between name and description
    to be displayed.  Note this may require changing Display's component type!
 */

/**************************
PIE API WALKTHROUGH 2 - MODELS, SEQUELIZE, POSTGRESQL, PGADMIN, AND CRUD
**************************/
/*
RECAP:
npm
package.json/package.lock.json/node_modules
nodemon
express (node index.js, npm run dev, nodemon)
how internet works
.env file
.gitignore file
ran a server (express)
ran on Postman
parsed into controller file
*/
/*
In PGAdmin, create new database => call it pieApi (make sure your postgreSQL password is implemented)
npm install sequelize (explain => link between server and db)
npm install pg (explain => for access to postgres)
npm install body-parser (explain => allows us to use req.body)
Create db.js file and add:
*/

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
  host: 'localhost', 
  dialect: 'postgres'
})

sequelize.authenticate() 
  .then(() => console.log('postgres db is connected'))
  .catch(err => console.log(err))

module.exports = sequelize;

/*
Tell them to add NAME and PASS to .env file
create models folder and add pie.js file:
*/

module.exports = (sequelize, DataTypes) => {
  const Pie = sequelize.define('pie', {
    nameOfPie: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    baseOfPie: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    crust: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timeToBake: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    servings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })

  return Pie;
}

/*
Explain how model is structure for table
Now go to index.js and add the following:
*/

const sequelize = require('./db');
const bodyParser = require('body-parser')

sequelize.sync();
// sequelize.sync({ force: true }); // explain use here
app.use(bodyParser.json())

/*
Go to piecontroller.js
*/

//Change this:
const express = require('express');
const router = express.Router();
// to
const router = require('express').Router();

// and add:
const sequelize = require('../db')
const Pie = sequelize.import('../models/pie')
// and then change to
const Pie = require('../db').import('../models/pie');

//-----------------

// SO you should ONLY see:
const router = require('express').Router();
const Pie = require('../db').import('../models/pie');

// comment out the existing router.gets and add the following:
router.get('/', (req, res) => {
  Pie.findAll()
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err }))
})

/*
Explain how the GET works; note that if you run it, you should see only an empty array ([])
Now build out the POST:
*/

router.post('/', (req, res) => {
  if (!req.errors) {
    const pieFromRequest = {
      nameOfPie: req.body.nameOfPie,
      baseOfPie: req.body.baseOfPie,
      crust: req.body.crust,
      timeToBake: req.body.timeToBake,
      servings: req.body.servings,
      rating: req.body.rating
    }

    Pie.create(pieFromRequest)
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

/*
Note that the pieFromRequest object is building off of the model => THEY HAVE TO MATCH!
We then use the .create() to build a new instance from the model
Run and use the post and in the body section of Postman, type out:
{
	"nameOfPie":"peach",
	"baseOfPie":"fruit",
	"crust": "graham",
	"timeToBake": 50,
	"servings": 8,
	"rating": 5
}
It should show in the output and persist in PGAdmin
If you then run the GET, you should see it show up there as well.
Have the students build out multiple pies
*/

/**************************
PIE API DEBUGGING CHALLENGE
**************************/

// Broken code:
// router.get('/name', (req, res) => {
//   Pie.findone({ where: { nameOfPie: req.params.nameOfPie }})
//     .then(pie => res.status(200).json(pie))
//     .catch(err => res.status(500).json({ error: err}))
// })

// router.put('/:id', (req, res) => {
// if (!req.errors) {
//   pie.update(req.body, { where: { id: req.body.id }})
//     .then(pie => res.status(200).json(pie))
//     .catch(err => res.json(req.errors))
// } else {
//     res.status(500).json(req.errors)
//   }
// })

// Good code:
router.get('/:name', (req, res) => {
  Pie.findOne({ where: { nameOfPie: req.params.name }})
    .then(pie => res.status(200).json(pie))
    .catch(err => res.status(500).json({ error: err}))
})

router.put('/:id', (req, res) => {
  if (!req.errors) {
    Pie.update(req.body, { where: { id: req.params.id }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})

/**************************
PIE API DELETE CHALLENGE
**************************/
// Challenge students to add DELETE functionality:
router.delete('/:id', (req, res) => {
  if (!req.errors) {
    Pie.destroy({ where: { id: req.params.id }})
      .then(pie => res.status(200).json(pie))
      .catch(err => res.json(req.errors))
  } else {
    res.status(500).json(req.errors)
  }
})