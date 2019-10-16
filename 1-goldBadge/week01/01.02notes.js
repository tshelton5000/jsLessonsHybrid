/*
Administrative Pieces:
1)  Show students how to use Zoom
2)  Show students how to submit their CSS creature projects to Canvas, Canvas pop quiz
3)  Show students how to git commit their javascriptLibrary folder
*/

/*
Creature Presentations:
Have 5 students present what they designed.
At end of those 5 presentations, give students 15 minutes to try to implement something they saw
a peer design.  Have a couple students show off revised creatures.
*/

/*
Literals, Operators, Conditionals Assignment:
Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif statements to
change one value of the array based upon the index number passed to the conditional.  Use the =, +=, /=, 
%=, and **= operators to make the change of the array value (only use one operator per conditional 
statement).

Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and
genre should be keys directly inside the object.  Inside of characters should be no more than 2 character 
objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item
objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a
character, and colors for the objects the characters have.


Challenge 3:
Read the following article on hoisting, then let's make predictions on how each of the 3 examples
below would behave.  Try to predict the behavior of each variable separatey (first, second, and third).
https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1
//1st example:
console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;

//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
}

//3rd example:
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();
*/

/*
Planning a Saturday:
We're going to plan Saturday events together with the help of variables and conditionals.

Here are the variable conditions you need to setup:
windy (boolean), sunny (boolean), rainy (boolean), hasCompletedChores (boolean), isMorning (boolean),
isAfternoon (boolean)

Here are the events you may or may not be able to complete:
grocery shopping, walking the dog, cleaning the house, indoor lunch with a friend, evening concert with fam

Your goal is to show your understanding of variable and conditionals by defining each variable listed above,
then to use conditionals and console.log if you can complete that event.  Note that the values of the
variables and the order in which you check the conditionals is totally up to you.  Have fun!

Extension Exercise:
If you can successfully complete the above, try the same activity with these adjusted requirements: 
1)  The variable conditions must be key-value pairs stored in an object.  This object is checked by
the conditionals to build the Saturday agenda
2)  Rather than console.logging the Saturday events, add each event you can do for that Saturday into
an array.  Console.log the entire agenda array once your object has passed through the conditionals
*/

/*
Playing with CSS:
Referencing the following article:
https://www.webdesignerdepot.com/2016/10/20-essential-css-tricks-every-designer-should-know/
Build a pen in codepen.io that utilizes 3-5 of the techniques shown above.  Find the 3-5 things you want
to show off in your pen with a partner of your choosing.  You have to both use the same 3-5 techniques,
but you can use them in totally different ways.  Have fun!
*/