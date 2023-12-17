// CLASS OBJECTS
let galaxy;
let canvas;

// SET UP GAME
function setUpGame() {
  // Set up canvas
  canvas = createCanvas(windowWidth / 2, windowHeight / 2);
  canvas.position(windowWidth / 4, windowHeight / 4);
  noCursor();

  // Set up galaxy
  galaxy = new Galaxy();

  // Set up button
  returnToArtPageButton.setUpButton();
}

// RESIZE CANVAS
function windowResized() {
  resizeCanvas(windowWidth / 2, windowHeight / 2);
  canvas.position(windowWidth / 4, windowHeight / 4);
}
