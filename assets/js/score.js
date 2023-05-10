/*jshint esversion: 6 */

const highscoreValue = document.querySelector('.highscore-value');

let highscore = localStorage.getItem('highscore') || 0;

// display high score on homepage
highscoreValue.innerText = highscore;