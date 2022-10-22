▼
//start game with node terminal or console by typing "node index.js"
//or press run to start the game 


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = require("prompt-sync")();
const alert = require("prompt-sync")();
var value = 2;
var points = 0;
var hasWon = true;
var lives = 3;

function guess() {
  rl.question("are you ready ?", (reply) => {
    let userName = prompt("input ur username: ");
    console.log(userName);
    while (hasWon && lives != 0) {
      var numbers = Math.floor(Math.random() * value) + 1;
      var userGuess = prompt(
        `guess the number between the range 1 and ${value}: `
      );
      if (numbers == userGuess) {
        alert("you got it right");
        value++;
        points++;
        alert(`you have ${lives} lives`);
        increment();
      } else if (numbers != userGuess) {
        alert("try again");
        lives--;
        alert(`you have ${lives} lives`);
      } else {
        hasWon = false;
      }
    }
    alert(`game over !!!\nyour total points is: ${points}  \ntry again`);
    rl.close();
  });
}
function increment() {
  if (hasWon == true) {
    alert("congrtulations! you have won, time to move to the next stage !");
  }
}
guess(value);