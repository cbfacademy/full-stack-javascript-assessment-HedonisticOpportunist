function setup() {
  setUpGame();
}

// DRAW FUNCTION
function draw() {
  drawStars();
  drawCatCharacter();
  drawMouseCharacter();
  moveCatCharacter();
  drawGameScore();
}

// KEY PRESSED FUNCTION
function keyPressed() {
  // if this key is pressed, then the cat moves to the left
  if (keyCode == 37) {
    is_left = true;
  }

  // if this key is pressed, then the cat moves to the right
  if (keyCode == 39) {
    is_right = true;
  }

  // if this key is pressed, then the cat moves down
  if (keyCode == 40) {
    is_down = true;
  }

  // if this key is pressed, then the cat moves up
  if (keyCode == 38) {
    is_up = true;
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

// FOUND MOUSE FUNCTION
function mouseFound(mouse) {
  let distance;

  // Calculate distance based on the mouse and cat position(s)
  distance = int(dist(mouse.x_pos, mouse.y_pos, cat_x, cat_y));

  // If distance is equal to twenty then increment the game score by one
  // Set isFound to true
  if (distance == 20) {
    game_score += 1;
    isFound = true;
  }

  // Reset the game score once the mice have been found
  if (mouseFound == 10 || isFound) {
    game_score = 0;
    isFound = false;
    setup();
  }
}
