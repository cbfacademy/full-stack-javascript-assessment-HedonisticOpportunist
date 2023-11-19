var snakeChar;
var food;
var resolution = 50;
var w;
var h;

// Credit @ Daniel Shiffman
// http://youtube.com/thecodingtrain
// Any further modifications and errors are mine and mine alone.

function setup() {
  // Set up canvas
  createCanvas(windowWidth, windowHeight);

  // Set up width and height for food and snake
  w = floor(w / resolution);
  h = floor(h / resolution);

  // Set up frame rate
  frameRate(5);

  // Set up stars
  setUpStars();

  // Set up snake
  snakeChar = new Snake();

  // Set up food
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function draw() {
  // Draw the stars
  drawStars();

  // Set up the scale
  scale(resolution);

  snakeChar.update();
  snakeChar.show();
}

// KEY CONTROLS
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snakeChar.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snakeChar.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snakeChar.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snakeChar.setDir(0, -1);
  } else if (key == " ") {
    snakeChar.grow();
  }
}
