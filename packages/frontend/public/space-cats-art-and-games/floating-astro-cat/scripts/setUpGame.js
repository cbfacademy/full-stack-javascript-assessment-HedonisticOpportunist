// CLASS OBJECTS
let galaxy;
let canvas;

// SET UP GAME FUNCTION
function setUpGame() {
  // Set up canvas
  canvas = createCanvas(windowWidth / 2, windowHeight / 2);

  noCursor();

  // Set up galaxy
  galaxy = new Galaxy();

  // Set up button
  returnToArtPageButton.setUpButton();
}

// RESIZE CANVAS FUNCTION
function windowResized() {
  resizeCanvas(windowWidth / 2, windowHeight / 2);
}
