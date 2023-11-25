// SPACE CAT CLASS
class SpaceCat {
  // CONSTRUCTOR
  constructor() {
    this.spaceCat;
    this.imgSize = 100;
    this.imgUrl = "../images/astro_cat.jpg"; //@ catalyststuff on Freepik.
  }

  // PRELOAD SPACE CAT
  preloadSpaceCat() {
    // Create an image and determine its size and styling
    this.spaceCat = createImg(this.imgUrl);
    this.spaceCat.size(this.imgSize, this.imgSize);
    this.spaceCat.style("border-radius", "50%");
  }

  // DRAW SPACE CAT
  drawSpaceCat() {
    // Move the space cat according to mouse directions
    this.spaceCat.position(mouseX, mouseY);
  }
}
