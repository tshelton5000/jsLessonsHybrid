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
*/

/*
Itinerary:
1)  Review server so far
2)  Diagram interaction between client, server, and database
3)  Review use of postman, pgadmin 4
4)  Build a get endpoint (make sure to comment out router.get('/') at 
    top of controller)

    http://docs.sequelizejs.com/manual/models-usage.html#-code-findall--code----search-for-multiple-elements-in-the-database

    router.get('/all', (req, res) => {
      Play.findAll()
        .then(plays => res.status(200).json(plays))
        .catch(err => res.json(err))
    })

5)  Build a delete endpoint

    http://docs.sequelizejs.com/manual/instances.html#destroying---deleting-persistent-instances

    router.delete('/:id', (req, res) => {
      Play.destroy({where: {id: req.params.id}})
        .then(play => res.status(200).json(play))
        .catch(err => res.json(err))
    })

6)  Build a put endpoint

    http://docs.sequelizejs.com/manual/instances.html#updating---saving---persisting-an-instance

    router.put('/:id', (req, res) => {
      Play.update({funFactor: req.body.funFactor}, {where: {id: req.params.id}})
        .then(play => res.status(200).json(play))
        .catch(err => res.json(err))
    })

7)  Build a user model

    http://docs.sequelizejs.com/manual/models-definition.html

    module.exports = function (sequelize, DataTypes){
      return sequelize.define('user', {
          username: DataTypes.STRING,
          passwordhash: DataTypes.STRING
      })
    }

8)  Build a usercontroller with this '/user' endpoint:

    https://www.npmjs.com/package/bcryptjs
    https://www.npmjs.com/package/jsonwebtoken

    var express = require('express');
    var router = express.Router();
    var sequelize = require('../db');
    var User = sequelize.import('../models/user');
    var bcrypt = require('bcryptjs');
    var jwt = require('jsonwebtoken');

    router.post('/user', function(req, res){
        let username = req.body.user.username;
        let pass = req.body.user.password;
        User.create({
            username: username,
            passwordhash: bcrypt.hashSync(pass, 10)
        }).then(
            function createSuccess(user){
                let token = jwt.sign({id: user.id},
                'this_is_a_secret', {expiresIn:60*60*24})
                res.json({
                    user: user,
                    message: 'created',
                    sessionToken: token
                })
            },
            function createError(err){
                res.send(500, err.message);
            }
        )
    })

9)  Add this '/login' endpoint:
    router.post('/login', function(req, res){
        User.findOne({where: {username: req.body.user.username}}
        ).then(
            function(user){
              if (user){
                bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches){
                  if (matches){
                    var token = jwt.sign({id: user.id}, 'this_is_a_secret', {expiresIn: 60*60*24});
                    res.json({user: user, message: 'successfully authenticated', sessionToken: token});
                  } else {
                    res.status(502).send({error: "you failed a"});
                  }
                })
              } else {
                res.status(500).send({error: "failed to authenticate"});
              }
              },
              function(err){
                res.status(501).send({error: err.message});
            }
        )
    })

    module.exports = router;

10) Connect the usercontroller to index.js:

    const usercontroller = require('./controllers/usercontroller');

    app.use('/auth', usercontroller);

    Test both routes to verify that they're creating and logging users in pgadmin

11)  Add validate session middleware file to middleware folder:

    var jwt = require('jsonwebtoken');
    var sequelize = require('../db');
    var User = sequelize.import('../models/user');

    module.exports = function(req, res, next){
        if (req.method == 'OPTIONS'){
            next();
        } else {
            let sessionToken = req.headers.authorization;
            if(!sessionToken) return res.status(403).send({auth: false, message: 'No token provided.'})
            else {
                jwt.verify(sessionToken, 'this_is_a_secret', (err, decoded) => {
                    if (decoded){
                        User.findOne({where: {id: decoded.id}}).then(user => {req.user = user;
                        next();
                    }),
                    function(){
                        res.status(401).send({error: 'Not Authorized'});
                    }
                    } else {
                        res.status(400).send({error: 'Not supported'});
                    }
                })
            }
        }
    }

12)  add use of validate session to index.js
    app.use(require('./middleware/validate-session'));

13)  Test protection of endpoints by logging in, using token, then accessing plays
*/