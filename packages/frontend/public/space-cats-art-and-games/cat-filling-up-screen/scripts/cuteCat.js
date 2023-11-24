// CUTE CATS CLASS
class CuteCats {
  constructor() {
    this.cuteCat;
    this.img_src = "../images/cute_cat.png"; // @ https://pixabay.com/users/rosanegra_1-432510/
    this.img_size = 50;
    this.cuteCats = [];
  }

  preloadCuteCats() {
    {
      // Fill up the previously empty cuteCats array with individual cute cats
      for (let i = 0; i < 20; i++) {
        this.cuteCat = createImg(this.img_src, "Cute Cat");
        this.cuteCat.size(this.img_size, this.img_size);
        this.cuteCat.style("border-radius", "50%");
        this.cuteCat.position(
          random(-windowWidth, windowWidth),
          random(-windowHeight, windowHeight)
        );

        // Push the individual cat into the cuteCats array
        this.cuteCats.push(this.cuteCat);
      }
    }
  }

  drawCuteCats() {
    /* Inspired by: 
    @ https://editor.p5js.org/KevinWorkman/sketches/XklOOiqXa
    */
    for (let i = 0; i < this.cuteCats.length; i++) {
      this.cuteCats[i];
    }
  }
}
