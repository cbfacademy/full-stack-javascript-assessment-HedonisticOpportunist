let cuteCats;

function preloadCuteCat() {
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

function drawCuteCats() {
  /* Inspired by: 
    @ https://editor.p5js.org/KevinWorkman/sketches/XklOOiqXa
    */
  for (let i = 0; i < cuteCats.length; i++) {
    cuteCats[i];
  }
}
