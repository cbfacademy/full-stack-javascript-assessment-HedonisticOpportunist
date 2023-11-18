function setUpButton() {
  // Create a button that reloads the scene
  button = createButton("RELOAD ME");
  button.position(150, 150);
  button.mousePressed(reloadScene);
}
