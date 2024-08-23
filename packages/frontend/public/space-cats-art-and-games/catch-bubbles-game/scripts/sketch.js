// CLASS VARIABLES
let returnToGamesPageButton;

// PRELOAD FUNCTION
function preload() {
  // preload return to game page button
  returnToGamesPageButton = new ReturnToGamesPageButton();
}

// SETUP FUNCTION
function setup() {
  setUpGame();
}

// DRAW FUNCTION
function draw() {
  background(0, 0, 0);
  noStroke();

  // DRAW ITEMS
  stars.drawStars();

  // Draw game score
  game_score_display.drawGameScore(score);

  // Draw cat character
  cat.drawCatCharacter();
  cat.dealWithEdges();

  // Draw bubbles
  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].moveBubbles();
    score = bubbles[i].checkBubblesIfTouched(cat.x, cat.y, score);
    bubbles[i].displayBubbles();
  }

  // End game
  game_score_display.endGame(score);
}

// KEY PRESSED FUNCTION
function keyPressed() {
  // if this key is pressed, then the cat moves to the left
  if (keyCode == 37) {
    is_left = true;
    cat.moveCat("LEFT");
  }

  // if this key is pressed, then the cat moves to the right
  if (keyCode == 39) {
    is_right = true;
    cat.moveCat("RIGHT");
  }

  // if this key is pressed, then the cat moves down
  if (keyCode == 40) {
    is_down = true;
    cat.moveCat("DOWN");
  }

  // if this key is pressed, then the cat moves up
  if (keyCode == 38) {
    is_up = true;
    cat.moveCat("UP");
  }
}

function keyReleased() {
  if (keyCode == 37) {
    is_left = false;
  }

  if (keyCode == 39) {
    is_right = false;
  }

  if (keyCode == 40) {
    is_down = false;
  }

  if (keyCode == 38) {
    is_up = false;
  }
}
