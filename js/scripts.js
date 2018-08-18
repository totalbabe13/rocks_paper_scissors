// alert('yolo!');
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
    let scoreComp = 0;
    let scoreUser = 0;
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


  // singleRound('Rock',computerPlay());
  // singleRound('Paper',computerPlay());
     singleRound('rock',computerPlay());