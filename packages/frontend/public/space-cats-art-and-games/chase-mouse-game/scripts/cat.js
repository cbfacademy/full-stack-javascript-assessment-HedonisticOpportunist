// DRAW CAT

function drawCatCharacter() {
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
}

// MOVE CAT CHARACTER FUNCTION
function moveCatCharacter() {
  // Move the character, ensuring that the character stays within the canvas
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
    if (cat_y > height * 0.2) {
      cat_y -= 10;
    } else {
      scroll_position += 10;
    }
  }
}
