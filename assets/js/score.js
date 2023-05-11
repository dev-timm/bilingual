/*jshint esversion: 6 */

const highScoreValue = document.querySelector('.high-score-value');

let highScore = localStorage.getItem('highScore') || 0;

// display high score on homepage
highScoreValue.innerText = highScore;