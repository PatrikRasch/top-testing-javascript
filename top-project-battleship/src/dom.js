import { player1gameboard, player2gameboard, shipArrayPlayer1, shipArrayPlayer2 } from "./gameplay";

const headerTitle = document.querySelector(".header-title");

const player1ships = document.querySelector(".player-ships");
const player2ships = document.querySelector(".computer-ships");

const player1gameboardDom = document.querySelector(".player-gameboard");
const player2gameboardDom = document.querySelector(".computer-gameboard");

const shipsLeftPlayer1 = document.querySelector(".ships-left-player-value");
const shipsLeftPlayer2 = document.querySelector(".ships-left-computer-value");

const hitsTakenPlayer1 = document.querySelector(".hits-taken-player-value");
const hitsTakenPlayer2 = document.querySelector(".hits-taken-computer-value");

const playAudio = (audioFile) => {
  const chosenTrack = new Audio(`../src/audio/${audioFile}.mp3`);
  if (chosenTrack.src.slice(-8) === "fire.mp3") chosenTrack.volume = 0.6;
  if (chosenTrack.src.slice(-8) === "hits.mp3") chosenTrack.volume = 0.45;
  chosenTrack.play();
};

const addImage = (cell, imageName) => {
  const image = document.createElement("img");
  image.classList.add("impact-img");
  image.src = `../src/img/${imageName}.png`;
  setTimeout(() => {
    image.style.opacity = "1";
  }, 0);
  cell.appendChild(image);
};

const animateCell = (cell) => {
  const animations = ["shake-1", "shake-2", "shake-3", "shake-4", "shake-5"];
  const randomNumber = Math.random();
  const chosenAnimation = Math.floor(randomNumber / 0.2);
  const animationRotation = animations[chosenAnimation];
  cell.style.animation = `${animationRotation} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
  cell.classList.add("cell-shake");
};

const winnerText = (gameboardDom, winOrLoseText, addClass) => {
  const declareWinOrLose = document.createElement("div");
  declareWinOrLose.textContent = `${winOrLoseText}`;
  declareWinOrLose.classList.add(addClass);
  setTimeout(() => {
    declareWinOrLose.style.opacity = "1";
  }, 0);
  gameboardDom.appendChild(declareWinOrLose);
};

const renderGameboard = (gameboard, numOfSquares) => {
  for (let i = 0; i < numOfSquares; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.coord = player1gameboard[i].coord;
    gameboard.appendChild(cell);
  }
};

const markShipsOnGameboard = (gameboard, gameboardDom) => {
  gameboard.forEach((element) => {
    if (element.containsShip !== false) {
      const domElement = gameboardDom.querySelector(`[data-coord="${element.coord}"]`);
      domElement.classList.add("shipOnSquare");
    }
  });
};

renderGameboard(player1gameboardDom, player1gameboard.length);
renderGameboard(player2gameboardDom, player1gameboard.length);
markShipsOnGameboard(player1gameboard, player1gameboardDom);
markShipsOnGameboard(player2gameboard, player2gameboardDom);

let hitsTakenPlayer1value = { value: 0 };
let hitsTakenPlayer2value = { value: 0 };

let shipsLeftPlayer1value = { value: shipArrayPlayer1.length };
let shipsLeftPlayer2value = { value: shipArrayPlayer2.length };

shipsLeftPlayer1.textContent = shipsLeftPlayer1value.value;
shipsLeftPlayer2.textContent = shipsLeftPlayer2value.value;

const updatePlayerDom = (cell, hitsTakenPlayer, hitsTakenPlayerValue) => {
  playAudio("fire");
  setTimeout(function () {
    if (cell.classList.contains("shipOnSquare") && !cell.classList.contains("ship-hit")) {
      cell.classList.add("ship-hit");
      hitsTakenPlayerValue.value += 1;
      hitsTakenPlayer.textContent = hitsTakenPlayerValue.value;
      addImage(cell, "ship-hit-explosion1");
      playAudio("hits");
    } else {
      cell.classList.add("ship-miss");
      addImage(cell, "water-droplet1");
      playAudio("miss");
      animateCell(cell);
      setTimeout(() => {
        cell.classList.remove("cell-shake");
      }, 500);
    }
  }, 300);
};

const updateShipsLeftDom = (shipsLeftPlayer, shipsLeftPlayerValue) => {
  shipsLeftPlayerValue.value -= 1;
  shipsLeftPlayer.textContent = shipsLeftPlayerValue.value;
};

player1gameboardDom.addEventListener("registerHit", (e) => {
  updatePlayerDom(e.detail.target, hitsTakenPlayer1, hitsTakenPlayer1value);
});
player2gameboardDom.addEventListener("registerHit", (e) => {
  updatePlayerDom(e.detail.target, hitsTakenPlayer2, hitsTakenPlayer2value);
});

player1gameboardDom.addEventListener("registerShipSunk", (e) => {
  updateShipsLeftDom(shipsLeftPlayer1, shipsLeftPlayer1value);
  setTimeout(function () {
    playAudio("sink");
  }, 600);
});
player2gameboardDom.addEventListener("registerShipSunk", (e) => {
  updateShipsLeftDom(shipsLeftPlayer2, shipsLeftPlayer2value);
  setTimeout(function () {
    playAudio("sink");
  }, 600);
});

document.addEventListener("registerWinner", (e) => {
  if (e.detail.value === false) {
    console.log("Player1 wins");
    visualiseWinnerGameboardDom(player1gameboardDom, player2gameboardDom);
  }
  if (e.detail.value === true) {
    console.log("Player2 wins");
    visualiseWinnerGameboardDom(player2gameboardDom, player1gameboardDom);
  }
  // player1gameboardDom.removeEventListener("registerHit", e);
  // player2gameboardDom.removeEventListener("registerHit", e);
});

const visualiseWinnerGameboardDom = (winningPlayerGameboardDom, losingPlayerGameboardDom) => {
  const winnerArray = Array.from(winningPlayerGameboardDom.children);
  setTimeout(function () {
    winnerArray.forEach((child) => child.classList.add("win"));
    winnerText(winningPlayerGameboardDom, "YOU WIN", "you-win-message");
  }, 1000);

  const loserArray = Array.from(losingPlayerGameboardDom.children);
  setTimeout(function () {
    winnerText(losingPlayerGameboardDom, "YOU LOSE", "you-lose-message");
    loserArray.forEach((child) => child.classList.add("lose"));
  }, 1000);
};

export {};
