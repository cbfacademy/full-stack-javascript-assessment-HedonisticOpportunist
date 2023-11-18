function drawStars() {
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
}
