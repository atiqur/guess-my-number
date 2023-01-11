'use strict';

let SCORE = 20;
let HIGHSCORE = 0;
let SECRET_NUM = getRandomNumber(1, 20);

const guessInput = document.querySelector('.guess');
const numberText = document.querySelector('.number');
const guessSubmitBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const messageText = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highScoreText = document.querySelector('.highscore');

guessSubmitBtn.addEventListener('click', checkGuess);
againBtn.addEventListener('click', playAgain);

function checkGuess(e) {
  e.preventDefault();
  const guess = Number(guessInput.value);
  console.log(guess);
  if (guess < 1 || guess > 20) {
    showMessage('Enter number between 1 and 20');
  } else if (guess === SECRET_NUM) {
    numberText.textContent = SECRET_NUM;
    messageText.textContent = 'Correct Answer!';
    changeBackground('#60b347');
    if (SCORE > HIGHSCORE) {
      HIGHSCORE = SCORE;
      showHighestScore();
    }
  } else {
    if (SCORE > 1) {
      SCORE--;
      showScore();
      guess > SECRET_NUM ? showMessage('Too high!') : showMessage('Too low!');
    } else {
      showMessage('You lost the game');
      SCORE--;
      showScore();
    }
  }
}

function showScore() {
  scoreText.textContent = SCORE;
}

function showMessage(message) {
  messageText.textContent = message;
}

function showHighestScore() {
  highScoreText.textContent = HIGHSCORE;
}

function changeBackground(color) {
  document.body.style.background = color;
}

function getRandomNumber(min, max) {
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
}

function playAgain(e) {
  e.preventDefault();
  SCORE = 20;
  SECRET_NUM = getRandomNumber(1, 20);
  showMessage('Start guessing...');
  showScore();
  changeBackground('#222');
  numberText.textContent = '?';
  guessInput.value = '';
}
