let input = document.getElementById('jokeNumber');
let button = document.querySelector('button');
let body = document.querySelector('body');

button.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`http://api.icndb.com/jokes/${input.value}`)
    .then(res => res.json())
    .then(json => showJoke(json.value.joke))
})

function showJoke(joke){
  let p = document.createElement('p');
  p.innerText = joke;
  body.appendChild(p);
}