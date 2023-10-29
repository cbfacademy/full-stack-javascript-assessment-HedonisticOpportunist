// @ https://editor.p5js.org/NateP/sketches/HJer6Dtxx

var planets = []; // array of Planets

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(20);
  for (var i = 0; i < 100; i++) {
    planets.push(new Planet());
    planets[i].move();
    planets[i].display();
  }
}

// Planet object
function Planet() {
  var r = random(88, 255);
  var g = random(0, 195);
  var b = random(0, 69);

  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);

  // "orbit" the planets
  this.move = function () {
    this.x += 1 / 2;
    if (this.x > width + 25) {
      this.x = -10;
    }
  };

  // display the planets
  this.display = function () {
    push();
    strokeWeight(1 / 8);
    stroke(255);
    fill(r, g, b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    pop();
  };
}
