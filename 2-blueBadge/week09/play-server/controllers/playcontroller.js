const express = require('express')
const router = express.Router();
const sequelize = require('../db')
const Play = sequelize.import('../models/play')

// router.get('/', (req, res) => res.send('I love to play all day!'))

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

router.get('/all', (req, res) => {
  Play.findAll()
    .then(plays => res.status(200).json(plays))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Play.destroy({where: {id: req.params.id}})
    .then(play => res.status(200).json(play))
    .catch(err => res.json(err))
})

router.put('/:id', (req, res) => {
  Play.update({funFactor: req.body.funFactor}, {where: {id: req.params.id}})
    .then(play => res.status(200).json(play))
    .catch(err => res.json(err))
})

module.exports = router;