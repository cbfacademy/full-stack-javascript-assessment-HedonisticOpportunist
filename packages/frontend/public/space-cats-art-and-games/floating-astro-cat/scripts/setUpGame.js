// CLASS OBJECTS
let galaxy;
let canvas;

// SET UP GAME
function setUpGame() {
  // Set up canvas
  canvas = createCanvas(windowWidth / 2, windowHeight / 2);

  noCursor();

  // Set up galaxy
  galaxy = new Galaxy();

  // Set up button
  returnToArtPageButton.setUpButton();
}

// RESIZE CANVAS
function windowResized() {
  resizeCanvas(windowWidth / 2, windowHeight / 2);
}
