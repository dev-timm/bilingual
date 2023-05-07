/*jshint esversion: 6 */

const highscoreValue = document.querySelector('.highscore-value');

let highscore = localStorage.getItem('highscore') || 0;

highscoreValue.innerText = highscore;