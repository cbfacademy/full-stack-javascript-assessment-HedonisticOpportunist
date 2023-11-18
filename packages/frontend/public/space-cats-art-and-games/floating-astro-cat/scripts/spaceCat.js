let spaceCat;

function preloadSpaceCat() {
  // Create an image and determine its size and styling
  spaceCat = createImg("../images/astro_cat.jpg"); // @ catalyststuff on Freepik.
  spaceCat.size(100, 100);
  spaceCat.style("border-radius", "50%");
}

function drawSpaceCat() {
  // Move the space cat according to mouse directions
  spaceCat.position(mouseX, mouseY);
}
