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

function drawBoxes(boxes) {
  for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 3; columnIndex++) {
      const targetBox = document.getElementById(`${rowIndex}${columnIndex}`);

      if (boxes[rowIndex][columnIndex] === Options.PlayerX) {
        targetBox.value = Options.PlayerX;
      } else if (boxes[rowIndex][columnIndex] === Options.PlayerO) {
        targetBox.value = Options.PlayerO;
      } else {
        targetBox.value = "";
      }
    }
  }
}

function selectBox(xCoordinate, yCoordinate) {
  boxes[xCoordinate][yCoordinate] = currentPlayer;

  drawBoxes(boxes);
  currentPlayer = nextPlayer(currentPlayer);
}

function reset() {
  boxes = [
    [Options.Unselected, Options.Unselected, Options.Unselected],
    [Options.Unselected, Options.Unselected, Options.Unselected],
    [Options.Unselected, Options.Unselected, Options.Unselected],
  ];

  drawBoxes(boxes);
}
