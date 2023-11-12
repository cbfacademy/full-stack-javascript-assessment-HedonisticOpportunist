// BASED ON OlD WORK, ORIGINALLY POSTED HERE: https://github.com/HedonisticOpportunist/Cats-in-Neath/blob/master/scripts/sketch.js

// POSITION VARIABLES
let floor_pos_y;
let is_left;
let is_right;
let is_down;
let is_up;
let scroll_position = 0;

// GAME SCORE
let game_score;

// CAT POSITION COORDINATES
let cat_x;
let cat_y;

// ARRAYS
let mice;
let eyes;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // POSITION / BOOLEAN VARIABLES
  is_left = false;
  is_right = false;
  is_up = false;
  is_down = false;

  // CAT CHARACTER COORINATES
  cat_x = 50;
  cat_y = 320;

  // MOUSE COORINATES
  mouse_y = 320;
  mouse_second_y = 580;

  /*
	 game score set to 0 so that player
	 can start the game with a carte blanche
	*/
  game_score = 0;

  /*
	 Initialise mice objects within the mouse array.
	 The x position is different for each mouse while the y position remains static
	 due to the mice staying on the ground.
	*/
  mice = [
    {
      x_pos: 150,
      y_pos: mouse_y,
    },
    {
      x_pos: 250,
      y_pos: mouse_y,
    },
    {
      x_pos: 340,
      y_pos: mouse_y,
    },
    {
      x_pos: 200,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 350,
      y_pos: mouse_second_y,
    },
    {
      x_pos: 550,
      y_pos: mouse_second_y,
    },
  ];

  /*
		Initialise eyes for the wider mice eyes array.
		The x position for each eye on the left side is incremented by
		five, so that the eyes display properly for each side.
		The y position for each eye remains static.
	*/
  eyes = [
    {
      x_pos: 150,
      y_pos: mouse_y,
    },
    {
      x_pos: 150 + 5,
      y_pos: mouse_y,
    },
    {
      x_pos: 250,
      y_pos: mouse_y,
    },
    {
      x_pos: 250 + 5,
      y_pos: mouse_y,
    },
    {
      x_pos: 340,
      y_pos: mouse_y,
    },
    {
      x_pos: 340 + 5,
      y_pos: mouse_y,
    },
  ];
}

// DRAW FUNCTION
function draw() {
  // SKY
  background(0, 0, 0);
  noStroke();

  // STARS
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

  // DRAW THE CAT'S FACE
  fill("#faf3dd");
  ellipse(cat_x, cat_y, 50, 50);

  // DRAW THE CAT'S EYES
  stroke("#e11d74");
  strokeWeight(5);
  point(cat_x - 10, cat_y - 2);
  point(cat_x + 10, cat_y - 2);

  // DRAW THE CAT'S WHISKERS
  stroke("#440047");
  strokeWeight(2);

  beginShape(LINES);
  vertex(cat_x - 25, cat_y + 8);
  vertex(cat_x - 10, cat_y + 8);
  endShape();

  beginShape(LINES);
  vertex(cat_x - 25, cat_y + 15);
  vertex(cat_x - 10, cat_y + 15);
  endShape();

  beginShape(LINES);
  vertex(cat_x + 25, cat_y + 8);
  vertex(cat_x + 10, cat_y + 8);
  endShape();

  beginShape(LINES);
  vertex(cat_x + 25, cat_y + 15);
  vertex(cat_x + 10, cat_y + 15);
  endShape();

  // DRAW THE MICE
  for (let i = 0; i < mice.length; i++) {
    //mouse body
    fill("#d6e0f0");
    ellipse(mice[i].x_pos, mice[i].y_pos, 20, 20);
    mouseFound(mice[i]);
  }

  // DRAW THE MICE'S EYES
  for (let j = 0; j < eyes.length; j++) {
    stroke("red");
    strokeWeight(2);
    point(eyes[j].x_pos, eyes[j].y_pos);
    mouseFound(eyes[j]);
  }

  // DISPLAY GAME SCORE
  fill(255, 255, 255);
  noStroke();

  textSize(25);
  textFont("Helvetica");
  text("Score: " + game_score, 300, 40);

  // Move the character, ensuring that the
  // character stays within the canvas
  if (is_left) {
    if (cat_x > width * 0.2) {
      cat_x -= 10;
    } else {
      scroll_position += 10;
    }
  }

  if (is_right) {
    if (cat_x < width * 0.8) {
      cat_x += 10;
    } else {
      scroll_position -= 10;
    }
  }

  if (is_down) {
    if (cat_y < height * 0.9) {
      cat_y += 10;
    } else {
      scroll_position -= 10;
    }
  }

  if (is_up) {
    console.log(height);
    if (cat_y > height * 0.2) {
      cat_y -= 10;
    } else {
      scroll_position += 10;
    }
  }
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

  // if distance is equal to twenty
  // then increment the game score by one
  if (distance == 20) {
    game_score += 1;
  }

  // reset the game score to 0 once
  // the player hits 500
  if (game_score == 500) {
    game_score = 0;
    setup();
  }
}
