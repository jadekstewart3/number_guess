'use strict';
const number = Math.trunc(Math.random() *20) + 1;
let score = 20;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  // no input
  if(!guess){
    document.querySelector('.message').textContent = 'No number!';
    // player wins
  } else if(guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem'
    // guess is too high
  } else if(guess > number) {
    if(score > 1){
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!'
      document.querySelector('.score').textContent = 0;
    }
    // guess is too low
  } else if (guess < number) {
    if(score > 1){
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose!'
      document.querySelector('.score').textContent = 0;
    }
  } 
});
