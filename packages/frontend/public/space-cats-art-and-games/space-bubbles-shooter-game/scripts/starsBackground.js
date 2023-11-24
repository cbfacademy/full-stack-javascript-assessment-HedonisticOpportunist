// STARS BACKGROUND CLASS
// @ Credit: https://editor.p5js.org/jesse_harding/sketches/0szF7gcAx
class StarsBackground {
  constructor() {
    this.stars = [];
    this.numStars = 400;
  }

  setUpStars() {
    // Set up stars
    for (let i = 0; i < this.numStars; i++) {
      this.stars[i] = createVector(random(width), random(height), random(1, 4));
    }
  }

  drawStars() {
    background(0, 0, 0);
    noStroke();
    for (let i = 0; i < this.numStars; i++) {
      fill("ghostwhite");
      ellipse(
        this.stars[i].x,
        this.stars[i].y,
        this.stars[i].z,
        this.stars[i].z
      );
    }
  }
}
