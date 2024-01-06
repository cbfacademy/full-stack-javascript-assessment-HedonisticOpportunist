// SPACE CAT CLASS //
class SpaceCat {
  // CONSTRUCTOR
  constructor() {
    this.spaceCat;
    this.imgSize = 100;
    this.imgUrl = "../images/astro_cat.jpg"; //@ catalyststuff on Freepik.
  }

  // PRELOAD SPACE CAT FUNCTION
  preloadSpaceCat() {
    // Create an image and determine its size and style
    this.spaceCat = createImg(this.imgUrl);
    this.spaceCat.size(this.imgSize, this.imgSize);
    this.spaceCat.style("border-radius", "50%");
  }

  // DRAW SPACE CAT FUNCTION
  drawSpaceCat() {
    // Move the space cat according to mouse directions
    this.spaceCat.position(
      constrain(mouseX, -windowWidth / 2, windowWidth / 2 - 100),
      constrain(mouseY, -windowHeight / 2, windowHeight / 2 - 100)
    );
  }
}
