// CUTE CATS CLASS //
class CuteCats {
  // CONSTRUCTOR
  constructor() {
    this.cuteCat;
    this.imgSrc = "../images/cute_cat.png"; // @ https://pixabay.com/users/rosanegra_1-432510/
    this.imgSize = 50;
    this.cuteCats = [];
  }

  // PRELOAD CUTE CATS FUNCTION
  preloadCuteCats() {
    {
      // Fill up the previously empty cuteCats array with individual cute cats
      for (let i = 0; i < 20; i++) {
        this.cuteCat = createImg(this.imgSrc, "Cute Cat");
        this.cuteCat.size(this.imgSize, this.imgSize);
        this.cuteCat.style("border-radius", "50%");
        this.cuteCat.position(
          random(windowWidth / 2, windowWidth / 4),
          random(windowHeight / 2, windowHeight / 4)
        );

        // Push the individual cat into the cuteCats array
        this.cuteCats.push(this.cuteCat);
      }
    }
  }

  // DRAW CUTE CATS FUNCTION
  drawCuteCats() {
    /* Inspired by: 
    @ https://editor.p5js.org/KevinWorkman/sketches/XklOOiqXa
    */
    for (let i = 0; i < this.cuteCats.length; i++) {
      this.cuteCats[i];
    }
  }
}
