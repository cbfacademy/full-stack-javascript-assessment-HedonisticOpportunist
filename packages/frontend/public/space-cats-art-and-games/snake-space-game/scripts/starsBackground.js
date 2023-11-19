let stars = [];
let numStars = 400;

// @ Credit: https://editor.p5js.org/jesse_harding/sketches/0szF7gcAx

function setUpStars() {
  // Set up stars
  for (let i = 0; i < numStars; i++) {
    stars[i] = createVector(random(width), random(height), random(1, 4));
  }
}

function drawStars() {
  background(0, 0, 0);
  noStroke();
  for (let i = 0; i < numStars; i++) {
    ellipse(stars[i].x, stars[i].y, stars[i].z, stars[i].z);
  }
}
