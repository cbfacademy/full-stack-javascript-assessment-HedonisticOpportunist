// SPACESHIP CLASS //
// Credit: @ https://linz.coderdojo.net/uebungsanleitungen/programmieren/web/space-shooter-mit-p5js/ (German)
// Any modifications and errors are mine and mine alone.

class SpaceShip {
  // CONSTRUCTOR
  constructor() {
    this.spaceShip;
    this.x = 480;
    this.y = 465;
    this.speed = 5;
    this.rotation = 0;
    this.imgSize = 100;
    this.imgUrl = "../images/player.png"; // @ https://opengameart.org/content/colorized-boss-sprites
    this.bullets = new Bullets();
  }

  // PRELOAD SPACE SHIP FUNCTION
  preloadSpaceShip() {
    // Create an image and determine its size and style
    this.spaceShip = createImg(this.imgUrl);
    this.spaceShip.size(this.imgSize, this.imgSize);
    this.spaceShip.style("border-radius", "50%");
  }

  // DRAW SPACE SHIP FUNCTION
  drawSpaceShip() {
    this.bullets.runBullets();
    push();
    translate(this.x, this.y);
    rotate(this.rotation);
    this.spaceShip.position(this.x, this.y);
    pop();
  }

  // MOVE SPACE SHIP FUNCTION
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

  // FIRE BULLETS FUNCTION
  fireBullets() {
    this.bullets.fireBullets(this.x - 450, this.y + 40);
  }

  // CONSTRAINT COORDINATES FUNCTION
  constrainCoordinates() {
    this.x = constrain(this.x, 420, width + 250);
    this.y = constrain(this.y, 250, height + 150);
  }
}
