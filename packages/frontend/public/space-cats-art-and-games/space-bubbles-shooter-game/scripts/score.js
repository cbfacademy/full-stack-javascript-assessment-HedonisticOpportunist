class GameScore {
  // CONSTRUCTOR
  constructor() {
    this.x = 300;
    this.y = 40;
    this.size = 25;
  }

  // DRAW GAME SCORE
  drawGameScore(game_score) {
    // DISPLAY GAME SCORE
    fill(255, 255, 255);
    noStroke();

    textSize(this.size);
    textFont("Helvetica");
    text("Shoot or catch twenty bubbles!", this.x, this.y);
    text("Bubbles Caught/ Shot: " + game_score, this.x, this.y + 25);
  }

  // END GAME
  endGame(score) {
    if (score >= 20) {
      // Reset score to zero
      score = 0;
      startGame();
    }
  }
}
