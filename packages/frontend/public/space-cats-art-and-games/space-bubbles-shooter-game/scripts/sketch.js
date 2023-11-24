// CLASS OBJECT VARIABLES
let stars;

// SETUP FUNCTION
function setup() {
  createCanvas(windowWidth, windowHeight);
  stars = new StarsBackground();
  stars.setUpStars();
}

// DRAW FUNCTION
function draw() {
  stars.drawStars();
}
