function drawMouseCharacter() {
  // DRAW THE MICE
  for (let i = 0; i < mice.length; i++) {
    if (!isFound) {
      //mouse body
      fill("#d6e0f0");
      ellipse(mice[i].x_pos, mice[i].y_pos, 20, 20);
      mouseFound(mice[i]);
    }
  }

  // DRAW THE MICE'S EYES
  for (let j = 0; j < eyes.length; j++) {
    if (!isFound) {
      stroke("red");
      strokeWeight(2);
      point(eyes[j].x_pos, eyes[j].y_pos);
      mouseFound(eyes[j]);
    }
  }
}
