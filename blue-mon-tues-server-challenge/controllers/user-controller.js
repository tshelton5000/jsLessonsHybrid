var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/create', (req, res) => {
  let userObj = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  }

  User.create(userObj)
    .then(result => {
      let token = jwt.sign({id: result.id}, 'my_secret_key', {expiresIn: 60*60*24})
      res.status(200).json({message: 'user created', result, token})
    })
    .catch(err => res.status(500).json({error: err.message}))
})

router.post('/login', (req, res) => {
  User.findOne({where: {username: req.body.username}})
  .then((user) => {
    if (bcrypt.compareSync(req.body.password, user.password)){
      let token = jwt.sign({id: user.id}, 'my_secret_key', {expiresIn: 60*60*24})
      res.status(200).json({message: 'login successful', user, token});
    } else {
      res.status(500).json({message: 'invalid credentials'})
    }
  })
  .catch(err => res.status(500).json({error: err.message}))
})

module.exports = router;