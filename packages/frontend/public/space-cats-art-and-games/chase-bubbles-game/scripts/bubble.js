// BUBBLES CLASS
// @ https://deepgram.com/learn/p5js-game-logic
// Any modification and errors are mine and mine alone.

class Bubble {
  constructor(x, y) {
    // Coordinates
    this.x = x;
    this.y = y;
    this.x_offset = random(0, 1000);
    this.y_offset = random(0, 1000);

    // Colours
    this.colour = { r: 0, g: 0, b: 0 };
    this.colour.r = random(0, 255);
    this.colour.g = random(0, 255);
    this.colour.b = random(0, 255);

    // Size
    this.radius = 10;
    this.size = random(this.radius - 5, 30);
    this.touched = false;
  }

  moveBubbles() {
    this.x_offset += 0.01;
    this.y_offset += 0.01;

    this.x = noise(this.x_offset) * width;
    this.y = noise(this.y_offset) * height;
  }

  checkBubblesIfTouched(x, y, score) {
    const distance = dist(x, y, this.x, this.y);
    if (distance < this.radius) {
      this.touched = true;
      score += 1;
    }
    return score;
  }

  displayBubbles() {
    if (this.touched) {
      fill("ghostwhite");
    } else {
      fill(this.colour.r, this.colour.g, this.colour.b); // Generate random colours
      circle(this.x, this.y, this.size * 2); // Generate randomly sized circles
    }
  }
}
