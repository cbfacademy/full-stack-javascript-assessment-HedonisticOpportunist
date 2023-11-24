// RELOAD BUTTON CLASS
class ReloadButton {
  constructor() {
    this.button;
    this.button_text = "RELOAD ME";
    this.button_position = 150;
  }

  setUpButton() {
    // Create a button that reloads the scene
    this.button = createButton(this.button_text);
    this.button.position(this.button_position, this.button_position);
    this.button.mousePressed(this.reloadScene);
  }

  reloadScene() {
    // Reload scene
    window.location.reload();
  }
}
