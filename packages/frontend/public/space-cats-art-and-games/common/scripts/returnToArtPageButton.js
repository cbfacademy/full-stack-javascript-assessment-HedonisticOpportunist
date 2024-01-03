// RETURN TO ART PAGE BUTTON CLASS //
class ReturnToArtPageButton {
  // CONSTRUCTOR
  constructor() {
    this.button;
    this.buttonText = "RETURN TO ART PAGE";
    this.buttonPosition = 100;
  }

  // SET UP BUTTON FUNCTION
  setUpButton() {
    // Create a button that returns the user to the art page
    this.button = createButton(this.buttonText);
    this.button.position(this.buttonPosition + 20, this.buttonPosition);
    this.button.mousePressed(this.returnToArtPage);
  }

  // RELOAD SCENE FUNCTION
  returnToArtPage() {
    // Open the window in the same tab
    window.open("https://space-cats.vercel.app/interactive-art", "_self");
  }
}
