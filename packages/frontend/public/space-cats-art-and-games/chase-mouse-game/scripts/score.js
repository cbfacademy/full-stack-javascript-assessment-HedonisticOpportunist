function drawGameScore() {
  // DISPLAY GAME SCORE
  fill(255, 255, 255);
  noStroke();

  textSize(25);
  textFont("Helvetica");
  text("Mice Found: " + game_score, 300, 40);
}
