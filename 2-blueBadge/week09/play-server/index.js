const express = require('express');
const app = express();
const playcontroller = require('./controllers/playcontroller');
const usercontroller = require('./controllers/usercontroller');
const workcontroller = require('./controllers/workcontroller');

const sequelize = require('./db');
const bodyParser = require('body-parser')

sequelize.sync();
// sequelize.sync({ force: true }); // explain use here
app.use(bodyParser.json());
// app.use(require('./middleware/headers'));

// app.use(express.static(__dirname + '/public'))
// console.log(__dirname)

// app.get('/', (req, res) => res.render('index'))

app.use('/auth', usercontroller);
app.use(require('./middleware/validate-session'));
app.use('/play', playcontroller);

app.listen(3000, () => console.log('App is listening on 3000'))