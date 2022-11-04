let Options = {
  Unselected: 'Unselected',
  PlayerX: 'X',
  PlayerO: 'O',
};

let players = [
  Options.PlayerX,
  Options.PlayerO,
];

let boxes = [
  [Options.Unselected, Options.Unselected, Options.Unselected],
  [Options.Unselected, Options.Unselected, Options.Unselected],
  [Options.Unselected, Options.Unselected, Options.Unselected],
];

let currentPlayer = players[0];

let gameOver = false;

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

function drawBoxes(boxes) {
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
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
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    if (boxes[rowIndex].every(box => box === player)) {
      return true;
    }
  }

  return false;
}

function checkForWinningColumn(boxes, player) {
  for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
    let boxesToCheck = [boxes[0][columnIndex], boxes[1][columnIndex], boxes[2][columnIndex]];

    if (boxesToCheck.every(box => box === player)) {
      return true;
    }
  }

  return false;
}

function checkForWinningDiagonal(boxes, player) {
  let firstDiagonal = [boxes[0][0], boxes[1][1], boxes[2][2]];
  if (firstDiagonal.every(box => box === player)) {
    return true;
  }

  let secondDiagonal = [boxes[0][2], boxes[1][1], boxes[2][0]];
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

    drawBoxes(boxes);
    checkForWinner(boxes, currentPlayer);
    currentPlayer = nextPlayer(currentPlayer);
  } else {
    drawError(xCoordinate, yCoordinate);
  }
}

function clearAllErrors() {
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
      clearError(rowIndex, columnIndex);
    }
  }
}

function reset() {
  boxes = [
    [Options.Unselected, Options.Unselected, Options.Unselected],
    [Options.Unselected, Options.Unselected, Options.Unselected],
    [Options.Unselected, Options.Unselected, Options.Unselected],
  ];

  drawBoxes(boxes);
  clearAllErrors();
  currentPlayer = players[0];
  gameOver = false;
  draw('');
}
