// SPACE CAT CLASS
class SpaceCat {
  constructor() {
    this.spaceCat;
    this.img_size = 100;
    this.img_url = "../images/astro_cat.jpg"; //@ catalyststuff on Freepik.
  }

  preloadSpaceCat() {
    // Create an image and determine its size and styling
    this.spaceCat = createImg(this.img_url);
    this.spaceCat.size(this.img_size, this.img_size);
    this.spaceCat.style("border-radius", "50%");
  }

  drawSpaceCat() {
    // Move the space cat according to mouse directions
    this.spaceCat.position(mouseX, mouseY);
  }
}
