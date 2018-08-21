// alert('yolo!');
let scoreComp = 0;
let scoreUser = 0;


function computerPlay () {
   let selector = Math.floor(Math.random() * 3) + 1;
   //return selector;

   switch(selector) {
    case 1:
        return 'Rock';
        break;
    case 2:
       return 'Paper'
        break;
    case 3:
        return 'Scissors'
   };
 };

  function singleRound(playerSelection,computerSelection) {
    // let scoreComp = 0;
    // let scoreUser = 0;
    // let theScore = `. The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    
    //case insensitve 
    if(playerSelection === 'rock') {
      playerSelection = 'Rock'; 
    } else if(playerSelection === 'paper') {
      playerSelection = 'Paper';
    } else if(playerSelection === "scissors") {
      playerSelection ='Scissors';
    }
    
    //if player chooses Rock
    if(playerSelection === 'Rock' && computerSelection === 'Rock'){
        return `Its a Tie! Both players chose Rock. The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    } else if(playerSelection === "Rock" && computerSelection === 'Paper') {
        scoreComp += 1
        return `Computer has won, Paper wraps Rock! The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    } else if(playerSelection === 'Rock' && computerSelection === 'Scissors') {
        scoreUser += 1;
        return `Congrats! You won, Rock breaks Scissors! The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    }

    //if player chooses Paper
    if(playerSelection === 'Paper' && computerSelection === 'Paper'){
        return `Its a Tie! Both players chose Paper. The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    } else if(playerSelection === "Paper" && computerSelection === 'Scissors') {
        scoreComp += 1;
        return `Computer has won, Scissors cut Paper! The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    } else if(playerSelection === 'Paper' && computerSelection === 'Rock') {
        scoreUser += 1;
        return `Congrats! You won, Paper wraps Rock! The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    }

    //if player chooses Scissors
    if(playerSelection === 'Scissors' && computerSelection === 'Scissors'){
        return `Its a Tie! Both players chose Scissors. The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    } else if(playerSelection === "Scissors" && computerSelection === 'Rock') {
        scoreComp += 1;
        return `Computer has won, Rock breaks Scissors! The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    } else if(playerSelection === 'Scissors' && computerSelection === 'Paper') {
        scoreUser += 1;
        return `Congrats! You won, Scissors cut Paper! The current score is --> User:${scoreUser} VS Computer:${scoreComp}`;
    }
   
  };

  // build game board:

//score bord objects:

// SCORE KEEPER container:
var scorekeeper = document.createElement('div');
var positionScore = document.querySelector('body');
positionScore.appendChild(scorekeeper);
scorekeeper.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; margin: 0 auto; border: 1px black solid; background: #6dffd3; width: 87%; height: 100px;';
scorekeeper.setAttribute('id', 'scorekeeper');


var positionYourScore = document.querySelector('#scorekeeper');
// INSIDE SCOREKEEPER --> YOURscore object:

var yourScore = document.createElement('div');
yourScore.setAttribute('id', 'yourScore');
scorekeeper.appendChild(yourScore);
yourScore.style.cssText = 'border: 1px red solid; width: 100px; background:#dfd4fc;';
yourScore.textContent = 'Your score:';


// INSIDE SCOREKEEPER --> COMPUTERscore object:
var computerScore = document.createElement('div');
computerScore.setAttribute('id', 'computerScore');
scorekeeper.appendChild(computerScore);
computerScore.style.cssText = 'border: 1px blue solid; width: 100px; background: #bbd3f9;';
computerScore.textContent = 'Computer Score:';


// WINNER LOSER container
var winnerWrapper = document.createElement('div');
var positionwinner = document.querySelector('body');
positionwinner.appendChild(winnerWrapper)

winnerWrapper.style.cssText = 'display: grid; grid-template-columns: 1fr; margin: 0 auto; border: 1px black solid; background: #64f751; width: 87%; height: 100px;';
winnerWrapper.setAttribute('id','winner');
winnerWrapper.textContent = 'WHO WON?';

var positionDisplay = document.querySelector('#winner');

// who won display object: 
var displayWinner = document.createElement('div');
displayWinner.setAttribute('id','victor')
positionDisplay.appendChild(displayWinner);
displayWinner.style.cssText = ' border: 1px green solid; width: 100px; height: 56px; background: #efdeb3;'


//ROCK PAPER SCISSOR container
var buttonsWrapper = document.createElement('div');
var positionbuttons = document.querySelector('body');
positionbuttons.appendChild(buttonsWrapper);

buttonsWrapper.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 10px; margin: 0 auto; border: 1px black solid; background: #ffc535; width: 87%; height: 100px;'
buttonsWrapper.setAttribute('id','buttonsWrapper');

positionButtonDisplay = document.querySelector('#buttonsWrapper');

// ROCK BUTTON
var rockButton = document.createElement('button');
rockButton.setAttribute('type','button');
rockButton.setAttribute('id','rock');
rockButton.textContent ='Rock button';
positionButtonDisplay.appendChild(rockButton);

// PAPER BUTTON
var paperButton = document.createElement('button');
paperButton.setAttribute('type','button');
paperButton.setAttribute('id','paper');
paperButton.textContent ='Paper button';
positionButtonDisplay.appendChild(paperButton);

// SCISSOR BUTTON
var scissorButton = document.createElement('button');
scissorButton.setAttribute('type','button');
scissorButton.setAttribute('id','scissor');
scissorButton.textContent ='Scissor button';
positionButtonDisplay.appendChild(scissorButton);
//end of game board

var buttonFinderRock = document.querySelector('#rock');
// buttonFinder.onclick = () => alert("you chose rock");
buttonFinderRock.addEventListener('click', () => {
  console.log(singleRound('rock', computerPlay()));
});

var buttonFinderPaper = document.querySelector('#paper');
// buttonFinder.onclick = () => alert("you chose paper");
buttonFinderPaper.addEventListener('click', () => {
  console.log(singleRound('paper', computerPlay()));
});

var buttonFinderScissor = document.querySelector('#scissor');
// buttonFinder.onclick = () => alert("you chose rock");
buttonFinderScissor.addEventListener('click', () => {
  console.log(singleRound('scissors', computerPlay()));
});

// var buttonFinder = document.querySelector('#paper');
// buttonFinder.onclick = () => alert("you chose paper");

// var buttonFinder = document.querySelector('#scissor');
// buttonFinder.onclick = () => alert("you chose scissors");



  // singleRound('Rock',computerPlay());
  // singleRound('Paper',computerPlay());
  //singleRound('rock',computerPlay());