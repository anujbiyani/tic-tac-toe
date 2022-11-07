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

function initBoxes(sideLength) {
  let boxes = [];

  for (let rowIndex = 0; rowIndex < sideLength; rowIndex++) {
    boxes[rowIndex] = [];

    for (let columnIndex = 0; columnIndex < sideLength; columnIndex++) {
      boxes[rowIndex].push(Options.Unselected);
    }
  }

  return boxes;
}

function drawBoxes(boxes) {
  let gridElement = document.getElementById('grid');

  for (let rowIndex = 0; rowIndex < boxes.length; rowIndex++) {
    let row = document.createElement('div');
    row.classList.add('row-container');
    row.id = `row-${rowIndex}`;

    gridElement.appendChild(row);

    for (let columnIndex = 0; columnIndex < boxes.length; columnIndex++) {
      let cell = document.createElement('button');
      cell.classList.add('box');
      cell.id = `${rowIndex}${columnIndex}`;
      cell.onclick = () => selectBox(rowIndex, columnIndex);

      row.appendChild(cell);
    }
  }
}

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
  for (let rowIndex = 0; rowIndex < boxes.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < boxes.length; columnIndex++) {
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
  for (let rowIndex = 0; rowIndex < boxes.length; rowIndex++) {
    if (boxes[rowIndex].every(box => box === player)) {
      return true;
    }
  }

  return false;
}

function checkForWinningColumn(boxes, player) {
  for (let columnIndex = 0; columnIndex < boxes.length; columnIndex++) {
    let boxesToCheck = [boxes[0][columnIndex], boxes[1][columnIndex], boxes[2][columnIndex]];

    if (boxesToCheck.every(box => box === player)) {
      return true;
    }
  }

  return false;
}

function checkForWinningDiagonal(boxes, player) {
  let firstDiagonal = [];
  for (let index = 0; index < boxes.length; index++) {
    firstDiagonal.push(boxes[index][index]);
  }
  if (firstDiagonal.every(box => box === player)) {
    return true;
  }

  let secondDiagonal = [];
  for (let index = 0; index < boxes.length; index++) {
    secondDiagonal.push(boxes[index][boxes.length - 1 - index]);
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

function clearAllErrors(boxes) {
  for (let rowIndex = 0; rowIndex < boxes.length; rowIndex++) {
    for (let columnIndex = 0; columnIndex < boxes.length; columnIndex++) {
      clearError(rowIndex, columnIndex);
    }
  }
}

function reset() {
  boxes = initBoxes(boxes.length);
  markBoxes(boxes);
  clearAllErrors(boxes);
  currentPlayer = players[0];
  gameOver = false;
  draw('');
}

let boxes = initBoxes(3);
drawBoxes(boxes);
