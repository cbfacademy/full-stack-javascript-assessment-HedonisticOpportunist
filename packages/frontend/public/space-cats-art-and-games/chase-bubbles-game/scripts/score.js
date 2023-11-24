class GameScore {
  constructor() {
    this.x = 300;
    this.y = 40;
    this.size = 25;
  }

  drawGameScore(game_score) {
    // DISPLAY GAME SCORE
    fill(255, 255, 255);
    noStroke();

    textSize(this.size);
    textFont("Helvetica");
    text("Catch ten bubbles!", this.x, this.y);
    text("Bubbles Caught: " + game_score, this.x, this.y + 25);
  }

  endGame(score) {
    if (score === 10) {
      // Reset score to zero
      score = 0;
      setUpGame();
    }
  }
}
