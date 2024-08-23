// CLASS VARIABLES
let spaceCat;
let returnToArtPageButton;

// PRELOAD FUNCTION
function preload() {
  // Set up space cat
  spaceCat = new SpaceCat();
  spaceCat.preloadSpaceCat();

  // Preload the return to art page button
  returnToArtPageButton = new ReturnToArtPageButton();
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
