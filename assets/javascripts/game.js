(function(){

let teamOneShootButton = document.querySelector("#teamone-shoot");
  // console.log(teamOneShootButton);

let teamTwoShootButton = document.querySelector("#teamtwo-shoot");
  // console.log(teamTwoShootButton);

let reset = document.querySelector("#reset");
  // console.log(reset);

let teamOneGoal = document.querySelector("#teamone-numhits");
  // console.log(teamOneGoal);

let teamTwoGoal = document.querySelector("#teamtwo-numhits");
  // console.log(teamTwoGoal);

let teamOneShots = document.querySelector("#teamone-numshots");
  // console.log(teamOneShots);

let teamTwoShots = document.querySelector("#teamtwo-numshots");
  // console.log(teamTwoShots);

let numReset = document.querySelector("#num-resets");
  // console.log(numberOfResets);

  // shots taken team one
  teamOneShootButton.addEventListener("click", function(){
      teamOneShots.innerHTML = parseInt(teamOneShots.innerHTML)+1;
      //comment
      let randomNumber = Math.random()
      if(randomNumber > .5) {
        teamOneGoal.innerHTML = parseInt(teamOneGoal.innerHTML) + 1;
      }
    })


//shots taken team 2
  teamTwoShootButton.addEventListener("click", function(){
      teamTwoShots.innerHTML = parseInt(teamTwoShots.innerHTML)+1;
      //comment
      let randomNumber = Math.random()
      if (randomNumber >= .5) {
        teamTwoGoal.innerHTML = parseInt(teamTwoGoal.innerHTML) + 1;
      }
    })


reset.addEventListener("click", function() {

 console.log(teamOneShots.innerHTML)
  teamOneShots.innerHTML = 0;
  console.log(teamTwoShots.innerHTML)
  teamTwoShots.innerHTML = 0;

 console.log(teamOneGoal.innerHTML)
  teamOneGoal.innerHTML = 0;
  console.log(teamTwoGoal.innerHTML)
  teamTwoGoal.innerHTML = 0;

 console.log(numReset.innerHTML)
  numReset.innerHTML = parseInt(numReset.innerHTML) + 1;


})

  // if(counter.innerHTML >= 10){
  //   counter.style.color = "red";

  // Giving the value in between the span tags
  // \counter.innerHTML = parseInt(counter.innerHTML) + 1
})();

// incrementButton.addEventListener("click", function(){
//   console.log(counter.innerHTML)

//reset


// let reset = document.querySelector("#reset");
// console.log(reset);
// let numReset = document.querySelector("#num-resets");
// console.log(reset);
