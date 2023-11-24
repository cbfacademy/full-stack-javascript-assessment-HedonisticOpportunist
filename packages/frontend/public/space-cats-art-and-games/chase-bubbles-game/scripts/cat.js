// CLASS CAT

class Cat {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.speed = 5;
  }

  // MOVE CAT CHARACTER FUNCTION
  moveCat(direction) {
    // Move the character, ensuring that the character stays within the canvas
    if (direction === "LEFT") {
      if (this.x > width * 0.2) {
        this.x -= 10 * this.speed;
      }
    }

    if (direction === "RIGHT") {
      if (this.x < width * 0.8) {
        this.x += 10 * this.speed;
      }
    }

    if (direction === "DOWN") {
      if (this.y < height * 0.9) {
        this.y += 10 * this.speed;
      }
    }
    if (direction === "UP") {
      if (this.y > height * 0.2) {
        this.y -= 10 * this.speed;
      }
    }
  }

  drawCatCharacter() {
    // DRAW THE CAT'S FACE
    fill("#faf3dd");
    ellipse(this.x, this.y, 50, 50);

    // DRAW THE CAT'S EYES
    stroke("#e11d74");
    strokeWeight(5);
    point(this.x - 10, this.y - 2);
    point(this.x + 10, this.y - 2);

    // DRAW THE CAT'S WHISKERS
    stroke("#440047");
    strokeWeight(2);

    beginShape(LINES);
    vertex(this.x - 25, this.y + 8);
    vertex(this.x - 10, this.y + 8);
    endShape();

    beginShape(LINES);
    vertex(this.x - 25, this.y + 15);
    vertex(this.x - 10, this.y + 15);
    endShape();

    beginShape(LINES);
    vertex(this.x + 25, this.y + 8);
    vertex(this.x + 10, this.y + 8);
    endShape();

    beginShape(LINES);
    vertex(this.x + 25, this.y + 15);
    vertex(this.x + 10, this.y + 15);
    endShape();
  }
}
