require('dotenv').config();

const express = require('express');
const app = express();
const fetch = require('node-fetch');
const piecontroller = require('./controllers/piecontroller');
const usercontroller = require('./controllers/usercontroller');
const bodyParser = require('body-parser');
const sequelize = require('./db');

sequelize.sync();
app.use(bodyParser.json());
app.use(require('./middleware/headers'));
// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  let spellsUrls = [];
  for (let i = 1; i < 320; i++){
    spellsUrls.push('http://dnd5eapi.co/api/spells/' + i)
  }

  Promise.all(spellsUrls.map(url => 
    fetch(url)
      .then(res => res.json())
  ))
    .then(responses => console.log(responses))
})

app.use('/auth', usercontroller);
app.use(require('./middleware/validate-session')); //bouncer
app.use('/pie', piecontroller);

app.get('/', (req, res) => res.render('index'));

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}`));