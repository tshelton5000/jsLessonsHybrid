/*
Announcements:
1)  Your blue badge will be graded as follows (this rubric will come this week):
    60% blue badge project
    20% blue badge project presentation
    20% code challenge solutions
2)  Your EOW goal for the Server book should be to finish the book, but it's ok 
    if this book carries over into next week.  Note that the server book finishes
    with you building a complete server on your own.  This will connect to your
    last intro book that we'll start next week.
3)  You should have seen 2 intro videos for Node Server, I will create the rest
    tomorrow.  They should be available by Thursday, but I'll slack when they're
    posted to Canvas.
4)  We will discuss the NYT React app (from the react intro book) on Thursday.  Make
    sure you have this completed by Thursday so you can review it with us!
*/

/*
Itinerary:
1)  Let's go outside and talk/relax.  The only rules are that you have to talk with
    everyone in the class, you have to learn about how the classwork is going for
    other people, and we'll resume class at 630.  Get to know each other!

2)  Add validate session middleware file to middleware folder:

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

3)  add use of validate-session to index.js:
app.use(require('./middleware/validate-session'));

4)  Test protection of endpoints by logging in, using token, then accessing plays

5)  Create a new model, 'work', which has 'businessName', 'positionTitle',
    'yearsExp', and 'enjoyment' properties.  'businessName' and 'positionTitle'
    should be strings, while 'yearsExp' and 'enjoyment' should be numbers.  All of
    these properties should have 'allowNull' set to be false but 'enjoyment', which
    should have a defaultValue.  Be careful not to re-run your server until this
    model until after we finish this challenge.

6)  Create a new controller which deals with the 'work' table in the database, then 
    make sure any request with '/work' in the route directs to this controller.  The
    first endpoint in this controller should be for '/new', which adds a new 'work'
    instance to the database.
*/