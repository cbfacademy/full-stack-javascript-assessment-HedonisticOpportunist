// RETURN TO GAMES PAGE BUTTON CLASS //
class ReturnToGamesPageButton {
  // CONSTRUCTOR
  constructor() {
    this.button;
    this.buttonText = "RETURN TO GAMES PAGE";
    this.buttonPosition = 100;
  }

  // SET UP BUTTON FUNCTION
  setUpButton() {
    // Create a button that returns the user to the games page
    this.button = createButton(this.buttonText);
    this.button.position(this.buttonPosition + 20, this.buttonPosition);
    this.button.mousePressed(this.returnToGamesPage);
  }

  // RETURN TO GAMES PAGE FUNCTION
  returnToGamesPage() {
    // Open the window in the same tab
    window.open("https://space-cats.vercel.app/games", "_self");
  }
}
