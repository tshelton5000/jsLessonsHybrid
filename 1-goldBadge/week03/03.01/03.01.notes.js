/*
Announcements:
1)  Students have 3 check-in discussions they need to add their availability to
2)  Week 3 Repls are open
3)  Week 3 Videos are live
4)  Portfolio Project is assigned today--deployment will happen in 1 week (next Monday)
5)  Remind students that they can see the gold badge rubric (show and discuss)
6)  Give them policies and procedures survey
*/

/*
Gitpages Deployment:
1)  Make sure every student has a directory to store their html & css files
2)  Create new repoes in this directory
3)  Create new github repo, push to it
4)  Publish github repo

After deployment:
Have 3 students showcase their tutorial pages.  Have them highlight the creative
inspiration they took to design the site, difficulties they overcame in creating
their static page, and why they chose the JS concepts they did to teach.
*/

/*
Challenges:

Challenge 1 (Arrays, Array Methods):
Make an array that stores numbers.  Using Array.prototype.forEach(), add a random
number amount to the value of every element in the array.  Console.log your array
to confirm that it worked.

Challenge 2 (Objects, Functions):
First, make an object that stores numbers, booleans, and string values.
Make a function that accepts this object as a parameter, and checks that the object
does indeed store those types (use typeof, not instanceOf).  If the object contains
any types not listed above, the function should return false.  Otherwise, it returns
true.  If you would like an additional challenge, make your function check that any
object passed to it has at least 1 number, boolean, and string.

Challenge 2 Solution:
let obj={
  num: 10,
  bool: true,
  str: '1150',
  break: [1,2,3,4]
}

function objChecker(inputObj){
  for (value in inputObj){
    if (typeof inputObj[value] !== 'number'  && typeof inputObj[value] !== 'boolean' &&
        typeof inputObj[value] !== 'string'){
          return false
        }
  }
  return true;
}

Challenge 3 (Arrays, Objects, Callback Functions):
Use this sample object for the challenge:
{
  name:"John",
  age:30,
  cars: [
    { name:"Ford", models:[ "Fiesta", "Focus", "Mustang" ] },
    { name:"BMW", models:[ "320", "X3", "X5" ] },
    { name:"Fiat", models:[ "500", "Panda" ] }
  ]
 }
 Using Array.prototype.filter, store every car manufacturer object in the cars
 array that has a name of at least 4 characters into a new array.  Console.log
 your new array to check that it has only stored the 'Ford' and 'Fiat' manufacturer
 objects.

 If you'd like an additional challenge once you've solved the above, try solving
 this problem a different way entirely--make a function that accepts the object
 above as input.  Use Array.prototype.every() to make sure every car manufacturer
 object has at least 3 models.  If it doesn't, the function should return false.
 Otherwise, it should return true.
*/

/*
Bootstrap Play:
Using the boostrap docs, design a webpage that uses the following bootstrap objects:
1)  buttons
2)  cards
3)  collapse buttons
4)  progress bar

Once you've implemented those 4 items above, make sure to style them to be attractive!
At the end of time, you will share your creation with a peer across the room.  Be ready
to explain why you built your page the way that you did!
*/

/*
Assignment: 
Portfolio Project

https://aaronwebster88.github.io/
https://jamesdoraiii.github.io/
http://natedeisler.com/
https://maddieijams.github.io/
https://maynardz.github.io/portfoliov2/
*/