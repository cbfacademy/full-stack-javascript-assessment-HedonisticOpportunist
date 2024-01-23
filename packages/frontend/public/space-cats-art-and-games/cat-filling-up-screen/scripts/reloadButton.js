// RELOAD BUTTON CLASS //
class ReloadButton {
  // CONSTRUCTOR
  constructor() {
    this.button;
    this.buttonText = "RELOAD SCENE";
    this.buttonPosition = 150;
  }

  // SET UP BUTTON FUNCTION
  setUpButton() {
    // Create a button that reloads the scene
    this.button = createButton(this.buttonText);
    this.button.position(this.buttonPosition, this.buttonPosition);
    this.button.mousePressed(this.reloadScene);
  }

  // RELOAD SCENE FUNCTION
  reloadScene() {
    // Reload scene
    window.location.reload();
  }
}
