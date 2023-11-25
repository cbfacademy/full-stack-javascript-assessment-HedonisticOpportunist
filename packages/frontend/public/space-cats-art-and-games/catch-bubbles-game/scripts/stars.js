// STARS CLASS
//  /* @ Credit for the stars:
// https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ

class Stars {
  // CONSTRUCTOR
  constructor() {
    this.galaxy = {};
  }

  // DRAW STARS
  drawStars() {
    this.galaxy = {
      locationX: random(width),
      locationY: random(height),
      size: random(1, 5),
    };

    // Generate stars from mouse directions and random x/y positions
    fill(100, 100, 0);
    noStroke();
    ellipse(mouseX, mouseY, this.galaxy.size, this.galaxy.size);
    ellipse(
      this.galaxy.locationX,
      this.galaxy.locationY,
      this.galaxy.size,
      this.galaxy.size
    );
  }
}
