// BULLETS CLASS
// @Credit: https://github.com/Gregory-Eales/uol-graphics-programming/blob/master/Asteroid-Game-Clone/sketch.js
// Any modifications and errors are mine and mine alone.

class Bullets {
  // CONSTRUCTOR
  constructor() {
    this.bullets = [];
    this.velocity = new createVector(0, -15);
    this.diam = 25;
  }

  // RUN BULLETS
  runBullets() {
    this.moveBullets();
    this.drawBullets();
  }

  // FIRE BULLETS
  fireBullets(x, y) {
    this.bullets.push(createVector(x, y));
  }

  // MOVE BULLETS
  moveBullets() {
    for (let i = 0; i < this.bullets.length; i++) {
      this.bullets[i].y += this.velocity.y;
    }
  }

  // DRAW BULLETS
  drawBullets() {
    fill(220, 20, 60); // Red colour bullets
    for (let i = 0; i < this.bullets.length; i++) {
      rect(this.bullets[i].x, this.bullets[i].y, this.diam, this.diam);
    }
  }
}
