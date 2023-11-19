class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(w / 2), floor(h / 2));
    this.xDir = 30;
    this.yDir = 30;
    this.len = 0;
  }

  setDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill("#265073");
      noStroke();
      rect(this.body[i].x, this.body[i].y, 0.5, 0.5); // creates a dotted effect
    }
  }
}
