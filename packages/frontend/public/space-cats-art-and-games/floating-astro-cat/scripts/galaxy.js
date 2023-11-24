// GALAXY CLASS
//* @ Credit for the stars:
// https://editor.p5js.org/ag3439/sketches/Skgh1ZQtQ

class Galaxy {
  constructor() {
    this.galaxy = {};
  }

  drawGalaxy() {
    background(0, 0, 35, 25);
    this.galaxy = {
      locationX: random(width),
      locationY: random(height),
      size: random(1, 6),
    };

    // Generate stars from mouse directions and random x/y positions
    ellipse(mouseX, mouseY, this.galaxy.size, this.galaxy.size);
    ellipse(
      this.galaxy.locationX,
      this.galaxy.locationY,
      this.galaxy.size,
      this.galaxy.size
    );
  }
}
