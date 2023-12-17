// CLASS OBJECT VARIABLES
let cuteCats;
let reloadButton;
let returnToArtPageButton;
let canvas;

// PRELOAD FUNCTION
function preload() {
  // Preload cute cats
  cuteCats = new CuteCats();
  cuteCats.preloadCuteCats();

  // Preload buttons
  reloadButton = new ReloadButton();
  returnToArtPageButton = new ReturnToArtPageButton();
}

// SETUP FUNCTION
function setup() {
  // Set up the canvas
  canvas = createCanvas(windowWidth / 2, windowHeight / 2);
  canvas.position(windowWidth / 4, windowHeight / 4);

  // Set up the buttons
  reloadButton.setUpButton();
  returnToArtPageButton.setUpButton();
}

// DRAW FUNCTION
function draw() {
  background(0, 0, 0);
  cuteCats.drawCuteCats();
}

// RESIZE CANVAS
function windowResized() {
  resizeCanvas(windowWidth / 2, windowHeight / 2);
  canvas.position(windowWidth / 4, windowHeight / 4);
}
