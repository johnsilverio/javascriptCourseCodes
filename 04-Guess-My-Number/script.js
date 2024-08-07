'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector('.message').textContent = '🎉Correct Number!'
console.log(document.querySelector(".message").textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

// Refator the code to DRY Principle = Dont Repeat Yourself 

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // When guess is not a number
    if (!guess) {
        displayMessage('⛔ No number!');

        // When player guess win
    } else if (secretNumber === guess) {
        displayMessage('🎉 Correct Number!');

        document.querySelector('body').style.backgroundColor = '#60b347';

        displayNumber(secretNumber);

        document.querySelector('.number').style.width = '30rem';

        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
        } else {
            displayMessage('💥 You lost the game!');
        }
        displayScore(score);
    }

    // // When guess ir too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //     }


    //     // When guess ir too low 
    // } else if (secretNumber > guess) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low!'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'
    //     }
    // }

    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayScore(score);
        displayNumber("?");
        document.querySelector('.number').style.width = '15rem';
        guess = Number(document.querySelector('.guess').value = '');

        displayMessage('Start guessing...');
        document.querySelector('body').style.backgroundColor = '#222';
    });
});