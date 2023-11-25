// BUBBLES CLASS
// @ https://deepgram.com/learn/p5js-game-logic
// Any modification and errors are mine and mine alone.

class Bubble {
  // CONSTRUCTOR
  constructor(x, y) {
    // Coordinates
    this.x = x;
    this.y = y;
    this.xOffset = random(0, 1000);
    this.yOffset = random(0, 1000);

    // Colours
    this.colour = { r: 0, g: 0, b: 0 };
    this.colour.r = random(0, 255);
    this.colour.g = random(0, 255);
    this.colour.b = random(0, 255);

    // Size
    this.radius = 10;
    this.size = this.radius;
    this.touched = false;
  }

  // MOVE BUBBLES
  moveBubbles() {
    this.xOffset += 0.01;
    this.yOffset += 0.01;

    this.x = noise(this.xOffset) * width;
    this.y = noise(this.yOffset) * height;
  }

  // CHECK CONTACT
  checkBubblesIfTouched(x, y, score) {
    const distance = dist(x, y, this.x, this.y);
    if (distance < this.radius) {
      this.touched = true;
      score += 1;
    }
    return score;
  }

  // DISPLAY BUBBLES
  displayBubbles() {
    if (this.touched) {
      fill("ghostwhite");
    } else {
      fill(this.colour.r, this.colour.g, this.colour.b); // Generate random colours
      circle(this.x, this.y, this.size * 2);
    }
  }
}
