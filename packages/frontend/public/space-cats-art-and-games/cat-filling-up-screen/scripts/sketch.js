// CLASS OBJECT VARIABLES
let cuteCats;
let reloadButton;

// PRELOAD FUNCTION
function preload() {
  // Preload cute cats
  cuteCats = new CuteCats();
  cuteCats.preloadCuteCats();

  // Preload reset button
  reloadButton = new ReloadButton();
}

// SETUP FUNCTION
function setup() {
  // Set up the canvas
  createCanvas(windowWidth, windowHeight);
  reloadButton.setUpButton();
}

// DRAW FUNCTION
function draw() {
  background(0, 0, 0);
  cuteCats.drawCuteCats();
}
