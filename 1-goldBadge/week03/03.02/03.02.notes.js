/*
Announcements (while showing students the calendar):
1)  Portfolios will be deployed Monday--have a great draft ready!
2)  Week 3 Repls due Saturday @ midnight
3)  Week 3 videos should be watched--Week 4 video coming by Friday
4)  Make sure to add your availability to the check-in discussions through Canvas
5)  Remember that all projects need to be complete in order to graduate from Gold!
6)  Students need to begin working through the API book in Canvas
*/

/*
Design Exploration:
Have students explore each of the design tools linked within the portfolio with 
a hot-potato learning style.  5 minutes per technology, with explanation for balsamiq and 
palleton, skipping adobexd

balsamiq: https://balsamiq.cloud/s8zvaz3/p1byck7/r2278
palleton: https://paletton.com/#uid=70d1D0kT6uWu2OmRlORTVoVUKiR
*/

/*
DOM Challenges:

Challenge 1:
Using the challenge1.html file provided, make the first button toggle the opacity of
the first image between 1.0 and 0.5 (this will toggle no opacity and 50% opacity).
The second button should toggle the borderRadius between 0% and 50%.  Have fun!

let happyButton = document.getElementById('happyButton');
  let happyPic = document.getElementById('happyPic');
  happyButton.addEventListener('click', function(e){
    if (happyPic.style.opacity == '0.5'){
      happyPic.style.opacity = '1.0';
    } else {
      happyPic.style.opacity = '0.5'
    }
    console.log(e);
  })
  let armsButton = document.getElementById('armsButton');
  let armsPic = document.getElementById('armsPic');
  armsButton.addEventListener('click', function(e){
    if (armsPic.style.borderRadius == '50%'){
      armsPic.style.borderRadius = '0%';
    } else {
      armsPic.style.borderRadius = '50%'
    }
    console.log(e);
})

Challenge 2:
Using the 'balldontlie' open API, grab data from NBA players and display the
info to the screen.  Using whatever tag you would like, display the player's name
and the team they play for.

https://www.balldontlie.io/#introduction

<script>
    fetch('https://www.balldontlie.io/api/v1/players')
      .then(res => res.json())
      .then(json => displayFunc(json.data))

    function displayFunc(players){
      let body = document.getElementsByTagName('body')[0];
      for (let player of players){
        console.log(player);
        let p = document.createElement('p');
        p.innerText = player.last_name;
        body.appendChild(p);
      }
    }
  </script>
*/

/*
return to Repl #3
return to bootstrap challenges: https://github.com/maynardz/bootstrap_challenges
*/