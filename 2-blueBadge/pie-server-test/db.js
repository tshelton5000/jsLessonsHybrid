const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres:admin@localhost/pieApi',{
  dialect: 'postgres'
})

sequelize.authenticate()
  .then(() => console.log('postgres db is connected'))
  .catch(err => console.log(err))

module.exports = sequelize;