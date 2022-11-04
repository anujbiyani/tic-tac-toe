let Options = {
  Unselected: 'Unselected',
  PlayerX: 'X',
  PlayerO: 'O',
}

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
        targetBox.innerText = "";
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

function selectBox(xCoordinate, yCoordinate) {
  clearError(xCoordinate, yCoordinate);

  if (boxes[xCoordinate][yCoordinate] === Options.Unselected) {
    boxes[xCoordinate][yCoordinate] = currentPlayer;

    drawBoxes(boxes);
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
}
