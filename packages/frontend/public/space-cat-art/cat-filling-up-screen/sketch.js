let cuteCats;

function preload() {
  cuteCats = [];

  // Fill up the previously empty cuteCats array with individual cute cats
  for (let i = 0; i < 20; i++) {
    let cuteCat = createImg("../images/cute_cat.png", "Cute Cat"); // @ https://pixabay.com/users/rosanegra_1-432510/
    cuteCat.size(50, 50);
    cuteCat.style("border-radius", "50%");
    cuteCat.position(
      random(-windowWidth, windowWidth),
      random(-windowHeight, windowHeight)
    );

    // Push the individual cat into the cuteCats array
    cuteCats.push(cuteCat);
  }
}

function setup() {
  // Set up the canvas
  createCanvas(windowWidth, windowHeight);
  noCursor();

  // Create a button that reloads the scene
  button = createButton("RELOAD ME");
  button.position(150, 150);
  button.mousePressed(reloadScene);
}

function draw() {
  background(0, 0, 0);

  /* Inspired by: 
    @ https://editor.p5js.org/KevinWorkman/sketches/XklOOiqXa
    */
  for (let i = 0; i < cuteCats.length; i++) {
    cuteCats[i];
  }
}

// * INDIVIDUAL FUNCTIONS *//
function reloadScene() {
  window.location.reload();
}
