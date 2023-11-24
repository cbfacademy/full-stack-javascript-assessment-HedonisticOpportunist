// CLASS CAT
class Cat {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.speed = 5;
  }

  // MOVE CAT CHARACTER FUNCTION
  moveCat(direction) {
    if (direction === "LEFT") {
      this.x -= 10 * this.speed;
    }

    if (direction === "RIGHT") {
      this.x += 10 * this.speed;
    }

    if (direction === "DOWN") {
      this.y += 10 * this.speed;
    }

    if (direction === "UP") {
      this.y -= 10 * this.speed;
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
