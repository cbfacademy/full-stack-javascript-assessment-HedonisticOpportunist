// SPACESHIP CLASS //
// Credit: @ https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/ (German)
// Any modifications and errors are mine and mine alone.

class SpaceShip {
  // CONSTRUCTOR
  constructor() {
    this.spaceShip;
    this.x = 100;
    this.y = 100;
    this.speed = 5;
    this.rotation = 0;
    this.imgSize = 100;
    this.imgUrl = "../images/player.png"; // @ https://opengameart.org/content/colorized-boss-sprites
    this.bullets = new Bullets();
  }

  // PRELOAD SPACE SHIP
  preloadSpaceShip() {
    // Create an image and determine its size and style
    this.spaceShip = createImg(this.imgUrl);
    this.spaceShip.size(this.imgSize, this.imgSize);
    this.spaceShip.style("border-radius", "50%");
  }

  // DRAW SPACE SHIP
  drawSpaceShip() {
    this.bullets.runBullets();
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    this.spaceShip.position(this.x, this.y);
    pop();
  }

  // MOVE SPACE SHIP
  moveShip(direction) {
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

  // FIRE BULLETS
  fireBullets() {
    this.bullets.fireBullets(this.x + 10, this.y);
  }

  // DEAL WITH EDGES
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
