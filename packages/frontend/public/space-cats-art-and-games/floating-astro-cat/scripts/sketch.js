// CLASS VARIABLES
let spaceCat;

// PRELOAD FUNCTION
function preload() {
  // Set up space cat
  spaceCat = new SpaceCat();
  spaceCat.preloadSpaceCat();
}

// SETUP FUNCTION
function setup() {
  setUpGame();
}

// DRAW FUNCTION
function draw() {
  galaxy.drawGalaxy();
  spaceCat.drawSpaceCat();
}
