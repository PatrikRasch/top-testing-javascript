import { player1gameboard, player2gameboard, shipArrayPlayer1, shipArrayPlayer2, placeShip } from "./gameplay";

const headerAction = document.querySelector(".header-action-button");

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

const updateShipToBePlacedName = () => {
  let shipToBePlaced = "";
  if (placerShipArrayPlayer1[0].length === 4) shipToBePlaced = "Battle Cruiser";
  if (placerShipArrayPlayer1[0].length === 3) shipToBePlaced = "Cruiser";
  if (placerShipArrayPlayer1[0].length === 2) shipToBePlaced = "Destoyer";
  if (placerShipArrayPlayer1[0].length === 1) shipToBePlaced = "Frigate";
  placeShipMessage.textContent = `Place the ${shipToBePlaced}`;
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

const placeShipMessage = document.createElement("div");
placeShipMessage.classList.add("place-ship-message");
placeShipMessage.textContent = "Place the Aircraft Carrier";
placeShipsModal.appendChild(placeShipMessage);

const switchOrientationButton = document.createElement("button");
switchOrientationButton.classList.add("switch-orientation-button");
switchOrientationButton.textContent = "Change orientation: X";
placeShipsModal.appendChild(switchOrientationButton);

// * Gameboard clone on modal
const player1gameboardDomClone = player1gameboardDom.cloneNode(true);
player1gameboardDomClone.classList.add("player1-gameboard-clone");
placeShipsModal.appendChild(player1gameboardDomClone);

let currentOrientation = "X";
switchOrientationButton.addEventListener("click", (e) => {
  currentOrientation = currentOrientation === "X" ? "Y" : "X";
  switchOrientationButton.textContent = `Change orientation: ${currentOrientation}`;

  switchOrientationButton.classList.add("switch-orientation-button-clicked");
  setTimeout(() => {
    switchOrientationButton.classList.remove("switch-orientation-button-clicked");
  }, 140);

  playAudio("swap");
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
  if (e.target.classList.contains("ship-pre-placement-illegal")) playAudio("deny");

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
  playAudio("cock");
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

player2gameboardDom.addEventListener("checkIfValidAttack", (e) => {
  if (e.detail.target.classList.contains("impact-img")) {
    e.detail.isValid = false;
    playAudio("deny");
  }
});

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

const resetShipsLeft = (shipsLeftPlayerValue, shipsLeftPlayer, shipArray) => {
  shipsLeftPlayerValue.value = shipArray.length;
  shipsLeftPlayer.textContent = shipsLeftPlayerValue.value;
};

const resetGame = () => {
  resetGameboardDom(player1gameboardDom);
  resetGameboardDom(player1gameboardDomClone);
  resetGameboardDom(player2gameboardDom);
  resetGameboard(player1gameboard);
  resetGameboard(player2gameboard);
  resetShipArray(shipArrayPlayer1);
  resetShipArray(shipArrayPlayer2);
  resetHitsTaken(hitsTakenPlayer1value, hitsTakenPlayer1);
  resetHitsTaken(hitsTakenPlayer2value, hitsTakenPlayer2);
  resetShipsLeft(shipsLeftPlayer1value, shipsLeftPlayer1, shipArrayPlayer1);
  resetShipsLeft(shipsLeftPlayer2value, shipsLeftPlayer2, shipArrayPlayer2);
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
