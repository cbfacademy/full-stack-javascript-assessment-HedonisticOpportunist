// CLASS CAT //
// BASED ON OlD WORK, ORIGINALLY POSTED HERE: https://github.com/HedonisticOpportunist/Cats-in-Neath/blob/master/scripts/sketch.js
// FURTHER IMPLEMENTATION IDEAS: https://github.com/HedonisticOpportunist/Game-Project-V2
class Cat {
  // CONSTRUCTOR
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

  // DRAW CAT FUNCTION
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

  // DEAL WITH EDGES FUNCTION
  // @Credit: https://github.com/Gregory-Eales/uol-graphics-programming/blob/master/Asteroid-Game-Clone/spaceship.js
  dealWithEdges() {
    if (this.x < 0) {
      this.x = width;
    }

    if (this.x > width) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = height;
    }

    if (this.y > height) {
      this.y = 0;
    }
  }
}
