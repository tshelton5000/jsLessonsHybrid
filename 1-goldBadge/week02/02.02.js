/**************************
GIT REVIEW
**************************/
/*
Git init
Git status
Git add .
Git commit -m "<message>"
*/

/**************************
ARRAYS

9-arrays
  02-populating&Referring.js, 03-length.js, 04-iterating.js, 05-methods.js
**************************/
/*
(IF DISCUSSED DURING DATA TYPES):
Remember what happens when I call a 'typeof' for arrays?  What comes back?  Object.

Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.

What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/

// Overview/Calling

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']]

console.log(typeof students); //object
console.log(students instanceof Array); //true
console.log(students[2]) //Rhys
console.log(students[1]) //Rhys

/*
Notice how we pull a value out of an array?  We append a [] with the index number of where the value is located (remember that JS starts counting at 0, not 1)
*/

/*
Let's go into the nested array and pull 'Iesha' out of the array
*/

let name = students[6][2];
console.log(`Hello ${name}, you look nice today.`);

// Populating/Referring

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (f of food) {
  console.log(f) // Pecan pie, Shrimp, Quesadilla, Cheese cake, Hotdog
}

//array methods
food.push('Pizza'); // Appends Pizza to end of array
food.splice(1, 1, 'Bananas') // Removes Shrimp and adds Bananas => (position, how many to cut, what to add in that location)
food.splice(2, 0, 'Sweet Potato Pie') //Adds Sweet Potato Pie in position 2 but doesn't remove anything
food.pop();  // Removes Pizza

for (f of food) {
  console.log(f)
}

food = food.slice(2, 4); //returns a trimmed portion of the array
console.log(food);

// Iterating can be done with for-of, but forEach can give us more to information to work with as we iterate

food.forEach(f => console.log(f)) // Pecan pie, Bananas, Sweet Potato Pie, Quesadilla, Cheesecake, Hotdog
food.forEach((food, number) => { 
  console.log(number); 
  console.log(food) 
}) // 0 Pecan pie 1 bananas 2 sweet potato pie...

/*
Let's build an array of movies.  Let's add a movie title to the end of this array,
add a movie to the middle of the array, then log through this array and console.log
the values
*/

let movies = ['300', 'Snow White', 'The Phantom Menace', 'The Watchmen', 'The Sound of Music'];

movies.push('Force Awakens')
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');

movies.forEach(f => console.log(f))

// Length

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length); // 10

/*
let's do the following with an array:
First check if you are working with an array
Then flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
Using a method only, print the values of the newly arranged array
*/

//Example array:
// let arr = [1,2,3,4,5]
let arr = new Array(1,2,3,4,5)
// console.log(arr)

if (arr instanceof Array === true) {
  let revArr = arr.reverse()
  revArr.forEach(a => console.log(a))
}

/**************************
OBJECTS

11-objects
**************************/

let netflix = {
  id: 9,
  name: "Super Store",
  season1: {
    seasonInfo: {
      episodeInfo: [
        { episode: 1, episodeName: "Pilot" },
        { episode: 2, episodeName: "Magazine Profile" },
        { episode: 3, episodeName: "Shots and Salsa" },
        { episode: 4, episodeName: "Mannequin" },
        { episode: 5, episodeName: "Shoplifter" },
        { episode: 6, episodeName: "Secret Shopper" },
        { episode: 7, episodeName: "Color Wars" },
        { episode: 8, episodeName: "Wedding Day Sale" },
        { episode: 9, episodeName: "All-Nighter" },
        { episode: 10, episodeName: "Demotion" },
        { episode: 11, episodeName: "Labor" }
      ]
    }
  },
  season2: {},
  season3: {}
};

/*
How do we access data with objects?  Where arrays used the [value] appended to the end of it, objects use dot notation.
*/

console.log("All data:", netflix); // All data: { id: 9, name: 'Super Store', season1: { seasonInfo: { episodeInfo: [Object] } }, season2: {}, season3: {} }
console.log("Just season info: ", netflix.season1.seasonInfo); // Just season info: { episodeInfo: [{ episode: 1, episodeName: 'Pilot' }, ...]}
console.log("Episode Number: ", netflix.season1.seasonInfo.episodeInfo[4].episodeName); // Shoplifter

/*
Challenge:
Pick an episode to show.
Using dot notation, walk through the netflix object and print off both the episode and the episode name.
*/


// JSON

var json = {
  "workbench.colorTheme": "One Dark+ (Sublime)",
  "window.zoomLevel": 3,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/*.js": {
      "when": "$(basename).ts"
    },
    "**/*.js.map": {
      "when": "$(basename)"
    }
  },
  "editor.fontFamily": "Monaco, 'Courier New', monospace",
  "editor.detectIndentation": false,
  "editor.letterSpacing": 0,
  "editor.tabSize": 2,
  "files.autoSave": "off",
  "editor.wordWrap": "on",
  "extensions.ignoreRecommendations": true,
  "[html]": {},
  "files.associations": {
    "*.html": "html",
    "*.js": "javascriptreact"
  },
  "html.format.indentInnerHtml": true,
  "editor.fontSize": 11,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.port": 3500,
  "[javascriptreact]": {}
}


// Object.keys() and Object.values()

let spaceJam = {
  toonSquad: {
    human: 'Michael Jordan',
    rabbit1: 'Bugs Bunny',
    rabbit2: 'Lola Bunny',
    duck: 'Daffy Duck',
    tDevil: 'Tasmanian Devil',
    bird: 'Tweety',
    cat: 'Sylvester',
    pig: 'Porky Pig'
  },
  monstars: {
    0: 'Bupkus',
    1: 'Bang',
    2: 'Nawt',
    3: 'Pound',
    4: 'Blanko'
  },
  nbaPlayers: {
    phoenixSuns: 'Charles Barkley',
    newJerseyNets: 'Shawn Bradley',
    newYorkNicks: 'Patrick Ewing',
    charlotteHornets1: 'Larry Johnson',
    charlotteHornets2: 'Muggsy Bogues'
  }
}

console.log(Object.keys(spaceJam.toonSquad)); // ['human', 'rabbit1', 'rabbit2', ...]
console.log(Object.keys(spaceJam.toonSquad.duck)); // ['0', '1', '2', ... '9'] => (Just gives the index numbers of 'Daffy Duck')
console.log(Object.keys(spaceJam.toonSquad).toString()); // human, rabbit1, rabbit2, ...

console.log(Object.values(spaceJam.toonSquad)); // ['Michael Jordan', 'Bugs Bunny', 'Lola Bunny', ...]


// Square Bracket Notation

let garden = {
  vegetable: 'zucchini',
  flower: 'sun flower',
  fruit: 'grape',
  water: true,
  sun: true,
  size: 10
};

console.log(garden.vegetable); // 'zucchini'

let x = 'vegetable';

console.log(garden.x, garden[x]); // undefined 'zucchini'

let baking = {};
baking['zucchini'] = 'better make some bread!';

// console.log(baking.garden.vegetable);

console.log(baking[garden['vegetable']]); // 'better make some bread!'

let key = 'water';

Object.keys(garden).forEach(g => {
  // console.log(g)
  if (key === g) {
    console.log(garden[key]); // true
  }
})

/**************************
GIT PUSH
**************************/
/*
Git add .
Git commit -m "message"
Set up repo in GitHub
Copy both lines and paste in terminal => run code
Refresh page
*/

/*
Explain why GitHub is important
*/

/**************************
REPL.IT ASSESSMENT 2
**************************/

/**************************
RECAP
**************************/

/*
Arrays
Objects
Git with GitHub
*/

//Repl.it Assessment 2