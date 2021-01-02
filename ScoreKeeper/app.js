const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const scoreOne = document.querySelector("#scoreOne");
const scoreTwo = document.querySelector("#scoreTwo");
const reset = document.querySelector("#reset");
const playingToBox = document.querySelector("#playingTo");
let playingTo = document.querySelector("#playingTo").value;
let scoreCounterOne = 0;
let scoreCounterTwo = 0;
let isGameOver = false;

playingToBox.addEventListener("change", () => {
  playingTo = document.querySelector("#playingTo").value;
  isGameOver = false;
  if (document.querySelector("#playingTo").value < 0) {
    document.querySelector("#playingTo").value *= -1;
  }
});

playerOne.addEventListener("click", () => {
  if (!isGameOver) {
    scoreCounterOne++;
    scoreOne.innerText = scoreCounterOne;
    if (scoreCounterOne == playingTo) {
      scoreOne.style.color = "green";
      scoreTwo.style.color = "red";
      isGameOver = true;
    } else {
      scoreOne.style.color = "black";
      scoreTwo.style.color = "black";
    }
  }
});

playerTwo.addEventListener("click", () => {
  if (!isGameOver) {
    scoreCounterTwo++;
    scoreTwo.innerText = scoreCounterTwo;
    if (scoreCounterTwo == playingTo) {
      scoreTwo.style.color = "green";
      scoreOne.style.color = "red";
      isGameOver = true;
    } else {
      scoreTwo.style.color = "black";
      scoreOne.style.color = "black";
    }
  }
});

reset.addEventListener("click", () => {
  scoreCounterOne = 0;
  scoreCounterTwo = 0;
  scoreOne.innerText = scoreCounterOne;
  scoreTwo.innerText = scoreCounterTwo;
  scoreOne.style.color = "black";
  scoreTwo.style.color = "black";
  playingTo = "0";
  document.querySelector("#playingTo").value = 0;
  isGameOver = false;
});
