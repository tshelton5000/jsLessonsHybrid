var time = Date.now();

seconds = () => {
	let secs = dateToTime(1000);
  return secs.length < 2 ? '0' + secs : secs;
}
function minutes(){
	let mins = dateToTime(60000);
  return mins.length < 2 ? '0' + mins : mins;
}
function hours(){
	let hours = dateToTime(3600000);
  return hours.length < 2 ? '0' + hours : hours;
}
dateToTime = (interval) => {
	return Math.floor((Date.now()  - time)/interval%60).toString();
}
displayHandler = () => {
	console.log(hours() + ':' + minutes() + ':' + seconds());
  if (seconds() % 10 == Math.floor(Math.random()*10)){
  	console.log('this is an excellent time!');
  }
}
let updater = window.setInterval(displayHandler, 1000);