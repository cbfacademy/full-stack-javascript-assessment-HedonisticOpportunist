let spaceCat;

function preload() {
  // Create an image and determine its size and styling
  spaceCat = createImg("../images/astro_cat.jpg"); // @ catalyststuff on Freepik.
  spaceCat.size(100, 100);
  spaceCat.style("border-radius", "50%");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}

function draw() {
  background(0, 0, 35, 25);

  /* @ Credit for the stars: 
  // https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ 
  */
  let galaxy = {
    locationX: random(width),
    locationY: random(height),
    size: random(1, 6),
  };

  // Generate stars from mouse directions and random x/y positions
  ellipse(mouseX, mouseY, galaxy.size, galaxy.size);
  ellipse(galaxy.locationX, galaxy.locationY, galaxy.size, galaxy.size);

  // Move the space cat according to mouse directions
  spaceCat.position(mouseX, mouseY);
}
