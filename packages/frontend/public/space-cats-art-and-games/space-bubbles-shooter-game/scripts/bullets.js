// BULLETS CLASS
// @Credit: https://github.com/Gregory-Eales/uol-graphics-programming/blob/master/Asteroid-Game-Clone/sketch.js
// The above is based on a university module that UoL offers (https://github.com/world-class/REPL/tree/master/modules/level-5/cm-2030-graphics-programming)
// Any modifications and errors are mine and mine alone.

class Bullets {
  // CONSTRUCTOR
  constructor() {
    this.bullets = [];
    this.velocity = new createVector(0, -15);
    this.diam = 15;
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
    fill("aliceblue");
    for (let i = 0; i < this.bullets.length; i++) {
      rect(this.bullets[i].x, this.bullets[i].y, this.diam, this.diam);
    }
  }
}
