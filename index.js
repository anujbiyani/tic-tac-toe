let Options = {
  Unselected: 'Unselected',
  PlayerX: 'X',
  PlayerO: 'O',
};

let players = [
  Options.PlayerX,
  Options.PlayerO,
];

let currentPlayer = players[0];
let gameOver = false;

const SIDE_LENGTH = 6;

function initBoxes() {
  let boxes = [];

  for (let rowIndex = 0; rowIndex < SIDE_LENGTH; rowIndex++) {
    boxes[rowIndex] = [];

    for (let columnIndex = 0; columnIndex < SIDE_LENGTH; columnIndex++) {
      boxes[rowIndex].push(Options.Unselected);
    }
  }

  return boxes;
}

let boxes = initBoxes();

function drawBoxes() {
  let gridElement = document.getElementById('grid');

  for (let rowIndex = 0; rowIndex < SIDE_LENGTH; rowIndex++) {
    let row = document.createElement('div');
    row.classList.add('row-container');
    row.id = `row-${rowIndex}`;

    gridElement.appendChild(row);

    for (let columnIndex = 0; columnIndex < SIDE_LENGTH; columnIndex++) {
      let cell = document.createElement('button');
      cell.classList.add('box');
      cell.id = `${rowIndex}${columnIndex}`;
      cell.onclick = () => selectBox(rowIndex, columnIndex);

      row.appendChild(cell);
    }
  }
}

drawBoxes(boxes);

function nextPlayer(currentPlayer) {
  if (currentPlayer === Options.PlayerX) {
    return Options.PlayerO;
  } else {
    return Options.PlayerX;
  }
}

function getBoxElement(rowIndex, columnIndex) {
  return document.getElementById(`${rowIndex}${columnIndex}`);
}

function markBoxes(boxes) {
  for (let rowIndex = 0; rowIndex < SIDE_LENGTH; rowIndex++) {
    for (let columnIndex = 0; columnIndex < SIDE_LENGTH; columnIndex++) {
      const targetBox = getBoxElement(rowIndex, columnIndex);

      if (boxes[rowIndex][columnIndex] === Options.PlayerX) {
        targetBox.innerText = Options.PlayerX;
      } else if (boxes[rowIndex][columnIndex] === Options.PlayerO) {
        targetBox.innerText = Options.PlayerO;
      } else {
        targetBox.innerText = '';
      }
    }
  }
}

function drawError(xCoordinate, yCoordinate) {
  getBoxElement(xCoordinate, yCoordinate).classList.add('error');
}

function clearError(xCoordinate, yCoordinate) {
  getBoxElement(xCoordinate, yCoordinate).classList.remove('error');
}

function draw(text) {
  document.getElementById('print').innerText = text;
}

function setWinner(player) {
  draw(`Player ${player} has won!`);
  gameOver = true;
}

function checkForWinningRow(boxes, player) {
  for (let rowIndex = 0; rowIndex < SIDE_LENGTH; rowIndex++) {
    if (boxes[rowIndex].every(box => box === player)) {
      return true;
    }
  }

  return false;
}

function checkForWinningColumn(boxes, player) {
  for (let columnIndex = 0; columnIndex < SIDE_LENGTH; columnIndex++) {
    let boxesToCheck = [boxes[0][columnIndex], boxes[1][columnIndex], boxes[2][columnIndex]];

    if (boxesToCheck.every(box => box === player)) {
      return true;
    }
  }

  return false;
}

function checkForWinningDiagonal(boxes, player) {
  let firstDiagonal = [];
  for (let index = 0; index < SIDE_LENGTH; index++) {
    firstDiagonal.push(boxes[index][index]);
  }

  if (firstDiagonal.every(box => box === player)) {
    return true;
  }

  let secondDiagonal = [];
  for (let index = 0; index < SIDE_LENGTH; index++) {
    secondDiagonal.push(boxes[index][SIDE_LENGTH - 1 - index]);
  }
  if (secondDiagonal.every(box => box === player)) {
    return true;
  }

  return false;
}

function checkForWinner(boxes, player) {
  if (checkForWinningRow(boxes, player) || checkForWinningColumn(boxes, player) || checkForWinningDiagonal(boxes, player)) {
    setWinner(player);
  }
}

function selectBox(xCoordinate, yCoordinate) {
  if (gameOver) {
    return;
  }

  clearError(xCoordinate, yCoordinate);

  if (boxes[xCoordinate][yCoordinate] === Options.Unselected) {
    boxes[xCoordinate][yCoordinate] = currentPlayer;

    markBoxes(boxes);
    checkForWinner(boxes, currentPlayer);
    currentPlayer = nextPlayer(currentPlayer);
  } else {
    drawError(xCoordinate, yCoordinate);
  }
}

function clearAllErrors() {
  for (let rowIndex = 0; rowIndex < SIDE_LENGTH; rowIndex++) {
    for (let columnIndex = 0; columnIndex < SIDE_LENGTH; columnIndex++) {
      clearError(rowIndex, columnIndex);
    }
  }
}

function reset() {
  boxes = initBoxes();
  markBoxes(boxes);
  clearAllErrors();
  currentPlayer = players[0];
  gameOver = false;
  draw('');
}
