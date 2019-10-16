/*
Announcements:
1)  Week 2 Repls are open--Week 1 Repls will be graded some time this week
2)  4/16/2019 and 4/18/2019 Check-In Discussions are available--access them from the syllabus
3)  Team assignments will come later--I need more evidence of individual strengths
4)  Easter weekend--no Saturday class, I'll be offline
*/

/*
Explore and Explain:
In teams of 2, students should learn one of these three assigned css techniques.  They will have an hour
to demonstrate their understanding of one of these techniques in a codepen that they'll share with the class:
transitions: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions
flex-box: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
*/

/*
Loops, Functions Challenges:
Challenge 1:
Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  The function should
console.log a random number between 5 and 7.  Once you've completed the challenge with a for-loop, see if
you can make this work with a for-of loop.  If you can solve that problem, see if you can solve this with
a for-each loop.  Note that for-of and for-each loops require slightly different conditions to work than
a for loop requires.

Challenge 2:
Let's compose functions!  Your first function should take a function as input and return that function
with a function call.  Your second function should take a string as input and return that string with 
extra stuff added to that string.  Console.log the results of your function calls.  Additional information
is below to help clarify what you're doing (the below is just an example):

first function: input-secondFunc output-secondFunc('coding is great!')
second function: input-'coding is great!' output-'coding is great!  pie is, too!'

Challenge 3:
Write an object with keys being the names of some of your favorite things to do (run, code, play magic,
bake, etc.) and values being why you like those things.  Use a for-in loop to console.log the reasons you
enjoy doing these activities.

Write an array storing the names of your favorite musicians.  Use a for-of loop to console.log the names
of these musicians.

Using the same array you built for musicians, use .map to iterate through every musician and add 'the best!'
to the name of the musician.  Console.log the result of this .map
*/

/*
Have students throw this code into jsFiddle--they should open their console to view the results

var time = Date.now();

x = () => {
	let x = dateToTime(1000);
  return x.length < 2 ? '0' + x : x;
}
function y(){
	let y = dateToTime(60000);
  return y.length < 2 ? '0' + y : y;
}
function z(){
	let z = dateToTime(3600000);
  return z.length < 2 ? '0' + z : z;
}
dateToTime = (interval) => {
	return Math.floor((Date.now()  - time)/interval%60).toString();
}
displayHandler = () => {
	console.log(z() + ':' + y() + ':' + x());
  if (x() % 10 == Math.floor(Math.random()*10)){
  	console.log('this is an excellent time!');
  }
}
let updater = window.setInterval(displayHandler, 1000);
*/

/*
Assignments:
1)  Week 2 Repl Challenges due Saturday @ midnight
2)  Week 2 Videos completed by next class
3)  Check-In discussions times posted
4)  Tutorial Web Page project
  https://calriggs.github.io/webProject/
  http://natedeisler.com/tutorial-website/#javascript3
  https://am-javascript-now.firebaseapp.com/
*/
