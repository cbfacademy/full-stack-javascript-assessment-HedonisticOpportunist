// CLASS VARIABLES
let spaceShip;
let returnToGamesPageButton;

// PRELOAD FUNCTION
function preload() {
  // Set up space ship
  spaceShip = new SpaceShip();
  spaceShip.preloadSpaceShip();

  // preload return to game page button
  returnToGamesPageButton = new ReturnToGamesPageButton();
}

// SETUP FUNCTION
function setup() {
  startGame();
}

// DRAW FUNCTION
function draw() {
  // Draw stars
  stars.drawStars();

  // Draw game score
  game_score_display.drawGameScore(score);

  // Draw bubbles
  for (i = 0; i < bubbles.length; i++) {
    push();
    bubbles[i].moveBubbles();

    // Check if the ship has come into contact with the bubbles
    score = bubbles[i].checkBubblesIfTouched(spaceShip.x, spaceShip.y, score);
    bubbles[i].displayBubbles();
    pop();
  }

  // Draw a spaceship
  spaceShip.drawSpaceShip();
  spaceShip.constrainCoordinates();

  // Check if the spaceship bullets have come into contact with the bubbles
  for (i = 0; i < bubbles.length; i++) {
    for (j = 0; j < spaceShip.bullets.bullets.length; j++) {
      score = bubbles[i].checkBubblesIfTouched(
        spaceShip.bullets.bullets[j].x,
        spaceShip.bullets.bullets[j].y,
        score
      );
    }
  }

  // End game
  game_score_display.endGame(score);
}

// KEY PRESSED FUNCTION
function keyPressed() {
  // if this key is pressed, then the ship moves to the left
  if (keyCode == 37) {
    is_left = true;
    spaceShip.moveShip("LEFT");
  }

  // if this key is pressed, then the ship moves to the right
  if (keyCode == 39) {
    is_right = true;
    spaceShip.moveShip("RIGHT");
  }

  // if this key is pressed, then the ship moves down
  if (keyCode == 40) {
    is_down = true;
    spaceShip.moveShip("DOWN");
  }

  // if this key is pressed, then the ship moves up
  if (keyCode == 38) {
    is_up = true;
    spaceShip.moveShip("UP");
  }

  // if this key is pressed, the spaceship fires bullets
  if (keyCode === 32) {
    spaceShip.fireBullets();
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
