function preload() {
  preloadCuteCat();
}

function setup() {
  // Set up the canvas
  createCanvas(windowWidth, windowHeight);
  setUpButton();
}

function draw() {
  background(0, 0, 0);
  drawCuteCats();
}

// * INDIVIDUAL FUNCTIONS *//
function reloadScene() {
  window.location.reload();
}
