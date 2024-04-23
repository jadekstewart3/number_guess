'use strict';
let number = Math.trunc(Math.random() *20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

const setScore = function(score){
  document.querySelector('.score').textContent = score;
}

const setNumber = function(number){
  document.querySelector('.number').textContent = number;
}

const setBackgroundColor = function(color){
  document.querySelector('body').style.backgroundColor = color;
}

const setStyleWidth = function(width){
  document.querySelector('.number').style.width = width;
}

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if(!guess){
    displayMessage( 'Please guess a number!');

    // player wins
  } else if(guess === number) {
    displayMessage('Correct Number!');

    setNumber(number);

    setBackgroundColor('#60b347');

    setStyleWidth('30rem');

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore
    }

    // guess is different
  } else if (guess !== number){
    if(score > 1){
      displayMessage(guess > number ? 'Too High!' : 'Too Low!');
      score--;
      setScore(score);
    } else {
      displayMessage('You lose!');
      setScore(0);
    }
  }
});
  
//anonymous function
document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  number = Math.trunc(Math.random() *20) + 1;

  displayMessage('Start guessing...');
  setScore(score);
  setNumber(number);
  setNumber('?');
  setBackgroundColor('#222');
  setStyleWidth('15rem');
  document.querySelector('.guess').value = '';
});


