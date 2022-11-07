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

function selectBox(xCoordinate, yCoordinate) {
  /*
  Step 1: mark the correct box as selected by the currentPlayer
  Step 2: update the HTML with the selection
  Step 3: set the currentPlayer to the next player
   */
}

function reset() {

}
