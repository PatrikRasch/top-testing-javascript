import { player1gameboard, player2gameboard, shipArrayPlayer1, shipArrayPlayer2, placeShip } from "./gameplay";

import splash from "./img/water-droplet1.png";
import explosion from "./img/ship-hit-explosion1.png";
// import favicon from "./img/warship2.png";
import cock from "./audio/cock.mp3";
import deny from "./audio/deny.mp3";
import fire from "./audio/fire.mp3";
import hits from "./audio/hits.mp3";
import miss from "./audio/miss.mp3";
import sink from "./audio/sink.mp3";
import swap from "./audio/swap.mp3";

const headerAction = document.querySelector(".header-action-button");

const player1gameboardDom = document.querySelector(".player-gameboard");
const player2gameboardDom = document.querySelector(".computer-gameboard");

const shipsLeftPlayer1 = document.querySelector(".ships-left-player-value");
const shipsLeftPlayer2 = document.querySelector(".ships-left-computer-value");

const hitsTakenPlayer1 = document.querySelector(".hits-taken-player-value");
const hitsTakenPlayer2 = document.querySelector(".hits-taken-computer-value");
const playAudio = (audioFile) => {
  const chosenTrack = new Audio(audioFile);
  // const chosenTrack = new Audio(`../src/audio/${audioFile}.mp3`);
  if (chosenTrack.src.slice(-8) === "fire.mp3") chosenTrack.volume = 0.6;
  if (chosenTrack.src.slice(-8) === "hits.mp3") chosenTrack.volume = 0.45;
  if (chosenTrack.src.slice(-8) === "deny.mp3") chosenTrack.volume = 0.45;
  if (chosenTrack.src.slice(-8) === "wave.mp3") {
    chosenTrack.volume = 0;
    const fadeIn = setInterval(() => {
      chosenTrack.volume += 0.05;
      if (chosenTrack.volume >= 0.3) clearInterval(fadeIn);
    }, 500);
  }
  chosenTrack.play();
};

const addImage = (cell, imageName) => {
  const image = document.createElement("img");
  image.classList.add("impact-img");
  image.src = imageName;
  // image.src = `../src/img/${imageName}.png`;
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
      if (gameboardDom === player2gameboardDom) domElement.classList.add("shipOnSquare", "shipInvisible");
      else domElement.classList.add("shipOnSquare", "shipVisible");
    }
  });
};

const updateShipToBePlacedName = () => {
  let shipToBePlaced = "";
  if (placerShipArrayPlayer1[0].length === 4) shipToBePlaced = "Battle Cruiser";
  if (placerShipArrayPlayer1[0].length === 3) shipToBePlaced = "Cruiser";
  if (placerShipArrayPlayer1[0].length === 2) shipToBePlaced = "Destoyer";
  if (placerShipArrayPlayer1[0].length === 1) shipToBePlaced = "Frigate";
  placeShipMessage.textContent = `PLACE THE ${shipToBePlaced}`.toUpperCase();
};

headerAction.textContent = "Sink Their Ships";

renderGameboard(player1gameboardDom, player1gameboard.length);
renderGameboard(player2gameboardDom, player1gameboard.length);
markShipsOnGameboard(player1gameboard, player1gameboardDom);

// * Darker background
const placeShipsModalBackground = document.createElement("div");
placeShipsModalBackground.classList.add("place-ships-modal-background");
document.body.appendChild(placeShipsModalBackground);

// * Modal on darker background
const placeShipsModal = document.createElement("div");
placeShipsModal.classList.add("place-ships-modal");
placeShipsModalBackground.appendChild(placeShipsModal);

const introductionMessage = document.createElement("div");
introductionMessage.classList.add("introduction-message");
introductionMessage.textContent = "START BY PLACING YOUR SHIPS";
placeShipsModal.appendChild(introductionMessage);

const placeShipMessage = document.createElement("div");
placeShipMessage.classList.add("place-ship-message");
placeShipMessage.textContent = "Place the Aircraft Carrier".toUpperCase();
placeShipsModal.appendChild(placeShipMessage);

// * Gameboard clone on modal
const player1gameboardDomClone = player1gameboardDom.cloneNode(true);
player1gameboardDomClone.classList.add("player1-gameboard-clone");
placeShipsModal.appendChild(player1gameboardDomClone);

const placeShipsModalBottom = document.createElement("div");
placeShipsModalBottom.classList.add("place-ships-modal-bottom");
placeShipsModal.appendChild(placeShipsModalBottom);

const switchOrientationButton = document.createElement("div");
switchOrientationButton.classList.add("switch-orientation-button", "x-orientation");
switchOrientationButton.textContent = "Change orientation: X".toUpperCase();
placeShipsModalBottom.appendChild(switchOrientationButton);

const shipsPlaced = document.createElement("div");
shipsPlaced.classList.add("ships-placed");
shipsPlaced.textContent = "SHIPS PLACED: ";
placeShipsModalBottom.appendChild(shipsPlaced);

const currentOrientationHandler = () => {
  currentOrientation = currentOrientation === "X" ? "Y" : "X";
  switchOrientationButton.textContent = `Change orientation: ${currentOrientation}`.toUpperCase();

  switchOrientationButton.classList.contains("x-orientation")
    ? switchOrientationButton.classList.replace("x-orientation", "y-orientation")
    : switchOrientationButton.classList.replace("y-orientation", "x-orientation");
  console.log("here");

  switchOrientationButton.classList.add("switch-orientation-button-clicked");
  setTimeout(() => {
    switchOrientationButton.classList.remove("switch-orientation-button-clicked");
  }, 140);

  playAudio(swap);
};

let currentOrientation = "X";
switchOrientationButton.addEventListener("click", currentOrientationHandler);
player1gameboardDomClone.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  currentOrientationHandler();
});

const cloneCells = player1gameboardDomClone.querySelectorAll(".cell");
cloneCells.forEach((cell) => {
  cell.classList.remove("cell");
  cell.classList.add("cloneCell");
});

shipArrayPlayer1.sort((a, b) => b.length - a.length);

let placerShipArrayPlayer1 = [...shipArrayPlayer1];

player1gameboardDomClone.addEventListener("mouseover", (e) => {
  const length = placerShipArrayPlayer1[0].length;
  const split = e.target.dataset.coord.split(".");
  const elementsToBeMarked = [];
  for (let i = 0; i < length; i++) {
    let partTargetNum = Number;
    let toBeMarked = String;
    if (currentOrientation === "X") {
      partTargetNum = Number(split[1]) + (length - i - 1);
      toBeMarked = split[0] + "." + partTargetNum;
    }
    if (currentOrientation === "Y") {
      partTargetNum = Number(split[0]) + (length - i - 1);
      toBeMarked = partTargetNum + "." + split[1];
    }
    elementsToBeMarked.push(...player1gameboardDomClone.querySelectorAll(`[data-coord="${toBeMarked}"]`));
  }
  elementsToBeMarked.forEach((element) => {
    element.classList.add("ship-pre-placement", "ship-pre-placement-transition");
  });
  const allIllegalTargets = player1gameboardDomClone.querySelectorAll(".ship-pre-placement");
  if (currentOrientation === "X") {
    if (Number(split[1]) + length > Math.sqrt(player1gameboardDomClone.children.length)) {
      allIllegalTargets.forEach((element) => {
        element.classList.add("ship-pre-placement-illegal");
      });
    }
  }
  if (currentOrientation === "Y") {
    if (Number(split[0]) + length > Math.sqrt(player1gameboardDomClone.children.length)) {
      allIllegalTargets.forEach((element) => {
        element.classList.add("ship-pre-placement-illegal");
      });
    }
  }
  const elementsToBeMarkedArray = Array.from(elementsToBeMarked);
  const result = elementsToBeMarkedArray.some((element) => {
    return element.classList.contains("shipOnSquare");
  });
  if (result) {
    elementsToBeMarked.forEach((element) => {
      element.classList.add("ship-pre-placement-illegal");
    });
  }
});

player1gameboardDomClone.addEventListener("mouseout", (e) => {
  for (let i = 0; i < player1gameboardDomClone.children.length; i++) {
    player1gameboardDomClone.childNodes[i].classList.remove("ship-pre-placement");
    player1gameboardDomClone.childNodes[i].classList.remove("ship-pre-placement-illegal");
    setTimeout(() => {
      player1gameboardDomClone.childNodes[i].classList.remove("ship-pre-placement-transition");
    }, 800);
  }
});

player1gameboardDomClone.addEventListener("click", (e) => {
  if (e.target.classList.contains("ship-pre-placement-illegal")) playAudio(deny);

  if (currentOrientation === "X") {
    if (placeShip(placerShipArrayPlayer1[0], player1gameboard, e.target.dataset.coord, "horizontal") === false) {
      return false;
    }
  }
  if (currentOrientation === "Y") {
    if (placeShip(placerShipArrayPlayer1[0], player1gameboard, e.target.dataset.coord, "vertical") === false) {
      return false;
    }
  }
  playAudio(cock);
  markShipsOnGameboard(player1gameboard, player1gameboardDomClone);
  markShipsOnGameboard(player1gameboard, player1gameboardDom);
  placerShipArrayPlayer1.shift();
  if (placerShipArrayPlayer1.length !== 0) updateShipToBePlacedName();
  if (placerShipArrayPlayer1.length === 0) {
    placeShipsModalBackground.style.opacity = 0;
    placeShipsModalBackground.style.display = "none";
    // playAudio("wave");
  }
});

const orientationDecider = () => {
  let randomNumber = Math.random();
  if (randomNumber > 0.5) return "horizontal";
  if (randomNumber <= 0.5) return "vertical";
};

const placeShipsPlayer2 = () => {
  shipArrayPlayer2.forEach((ship) => {
    let randomNumber = Math.floor(Math.random() * 10) + "." + Math.floor(Math.random() * 10);
    let placedShip = false;
    while (placedShip === false) {
      try {
        placedShip = placeShip(ship, player2gameboard, randomNumber, orientationDecider());
      } catch (error) {}
      if (!placedShip) {
        randomNumber = Math.floor(Math.random() * 10) + "." + Math.floor(Math.random() * 10);
      }
    }
  });
};

placeShipsPlayer2();
markShipsOnGameboard(player2gameboard, player2gameboardDom);

let hitsTakenPlayer1value = { value: 0 };
let hitsTakenPlayer2value = { value: 0 };

let shipsLeftPlayer1value = { value: shipArrayPlayer1.length };
let shipsLeftPlayer2value = { value: shipArrayPlayer2.length };
const shipsLeftPlayer1initially = [shipsLeftPlayer1value.value];
const shipsLeftPlayer2initially = [shipsLeftPlayer2value.value];

shipsLeftPlayer1.textContent = `${shipsLeftPlayer1value.value} / ${shipsLeftPlayer1initially}`;
shipsLeftPlayer2.textContent = `${shipsLeftPlayer2value.value} / ${shipsLeftPlayer2initially}`;

const updatePlayerDom = (cell, hitsTakenPlayer, hitsTakenPlayerValue) => {
  playAudio(fire);
  setTimeout(function () {
    if (cell.classList.contains("shipOnSquare") && !cell.classList.contains("ship-hit")) {
      cell.classList.add("ship-hit");
      hitsTakenPlayerValue.value += 1;
      hitsTakenPlayer.textContent = hitsTakenPlayerValue.value;
      addImage(cell, explosion);
      playAudio(hits);
    } else {
      cell.classList.add("ship-miss");
      addImage(cell, splash);
      playAudio(miss);
      animateCell(cell);
      setTimeout(() => {
        cell.classList.remove("cell-shake");
      }, 500);
    }
  }, 300);
};

const updateShipsLeftDom = (shipsLeftPlayer, shipsLeftPlayerValue, shipsLeftPlayerInitially) => {
  shipsLeftPlayerValue.value -= 1;
  shipsLeftPlayer.textContent = `${shipsLeftPlayerValue.value} / ${shipsLeftPlayerInitially}`;
};

player2gameboardDom.addEventListener("checkIfValidAttack", (e) => {
  if (e.detail.target.classList.contains("impact-img")) {
    e.detail.isValid = false;
    playAudio(deny);
  }
});

player1gameboardDom.addEventListener("registerHit", (e) => {
  updatePlayerDom(e.detail.target, hitsTakenPlayer1, hitsTakenPlayer1value);
});
player2gameboardDom.addEventListener("registerHit", (e) => {
  updatePlayerDom(e.detail.target, hitsTakenPlayer2, hitsTakenPlayer2value);
});

player1gameboardDom.addEventListener("registerShipSunk", (e) => {
  updateShipsLeftDom(shipsLeftPlayer1, shipsLeftPlayer1value, shipsLeftPlayer1initially);
  setTimeout(function () {
    playAudio(sink);
  }, 600);
});
player2gameboardDom.addEventListener("registerShipSunk", (e) => {
  updateShipsLeftDom(shipsLeftPlayer2, shipsLeftPlayer2value, shipsLeftPlayer2initially);
  setTimeout(function () {
    playAudio(sink);
  }, 600);
});

document.addEventListener("registerWinner", (e) => {
  if (e.detail.value === false) {
    visualiseWinnerGameboardDom(player1gameboardDom, player2gameboardDom);
  }
  if (e.detail.value === true) {
    visualiseWinnerGameboardDom(player2gameboardDom, player1gameboardDom);
  }
  headerAction.addEventListener("click", resetGameHandler);
});

const visualiseWinnerGameboardDom = (winningPlayerGameboardDom, losingPlayerGameboardDom) => {
  const winnerArray = Array.from(winningPlayerGameboardDom.children);
  setTimeout(function () {
    winnerArray.forEach((child) => child.classList.add("win"));
    winnerText(winningPlayerGameboardDom, "YOU WIN", "you-win-message");
    headerAction.textContent = "Play Again";
    headerAction.classList.add("header-action-button-hoverable");
  }, 1000);

  const loserArray = Array.from(losingPlayerGameboardDom.children);
  setTimeout(function () {
    winnerText(losingPlayerGameboardDom, "YOU LOSE", "you-lose-message");
    loserArray.forEach((child) => child.classList.add("lose"));
    headerAction.textContent = "Play Again";
  }, 1000);
};

const resetGameboardDom = (gameboardDom) => {
  const gameboardDomArray = Array.from(gameboardDom.children);
  gameboardDomArray.forEach((element) => {
    element.classList.remove("win", "lose", "shipOnSquare", "ship-hit", "ship-miss");
    if (element.firstChild) element.removeChild(element.firstChild);
  });
};

const resetWinOrLoseMessage = (gameboardDom) => {
  const gameboardRemoveMessage =
    gameboardDom.querySelector(".you-lose-message") || gameboardDom.querySelector(".you-win-message");
  gameboardDom.removeChild(gameboardRemoveMessage);
};

const resetGameboard = (gameboard) => {
  gameboard.forEach((element) => {
    element.containsShip = false;
    element.cellHit = false;
  });
};

const showPlaceShipsModal = () => {
  placeShipsModalBackground.style.opacity = 1;
  placeShipsModalBackground.style.display = "block";
};

const resetShipArray = (shipArray) => {
  shipArray.forEach((ship) => {
    ship.hits = 0;
    ship.sunk = false;
  });
  if (shipArray === shipArrayPlayer1) placerShipArrayPlayer1 = [...shipArrayPlayer1];
};

const resetHitsTaken = (hitsTakenPlayerValue, hitsTakenPlayer) => {
  hitsTakenPlayerValue.value = 0;
  hitsTakenPlayer.textContent = hitsTakenPlayerValue.value;
};

const resetShipsLeft = (shipsLeftPlayer, shipsLeftPlayerValue, shipArray, shipsLeftPlayerInitially) => {
  shipsLeftPlayerValue.value = shipArray.length;
  shipsLeftPlayer.textContent = `${shipsLeftPlayerValue.value} / ${shipsLeftPlayerInitially}`;
};

const resetGame = () => {
  headerAction.classList.remove("header-action-button-hoverable");
  resetGameboardDom(player1gameboardDom);
  resetGameboardDom(player1gameboardDomClone);
  resetGameboardDom(player2gameboardDom);
  resetGameboard(player1gameboard);
  resetGameboard(player2gameboard);
  resetShipArray(shipArrayPlayer1);
  resetShipArray(shipArrayPlayer2);
  resetHitsTaken(hitsTakenPlayer1value, hitsTakenPlayer1);
  resetHitsTaken(hitsTakenPlayer2value, hitsTakenPlayer2);
  resetShipsLeft(shipsLeftPlayer1, shipsLeftPlayer1value, shipArrayPlayer1, shipsLeftPlayer1initially);
  resetShipsLeft(shipsLeftPlayer2, shipsLeftPlayer2value, shipArrayPlayer2, shipsLeftPlayer2initially);
  resetWinOrLoseMessage(player1gameboardDom);
  resetWinOrLoseMessage(player2gameboardDom);
  showPlaceShipsModal();
  placeShipsPlayer2();
  markShipsOnGameboard(player2gameboard, player2gameboardDom);
  headerAction.removeEventListener("click", resetGameHandler);
};

const resetGameHandler = () => {
  resetGame();
};

export {};
