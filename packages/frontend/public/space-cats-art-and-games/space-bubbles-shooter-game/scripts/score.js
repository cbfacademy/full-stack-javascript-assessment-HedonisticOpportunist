// GAME SCORE CLASS //
class GameScore {
  // CONSTRUCTOR
  constructor() {
    this.x = 300;
    this.y = 40;
    this.size = 25;
  }

  // DRAW GAME SCORE FUNCTION
  drawGameScore(game_score) {
    // DISPLAY GAME SCORE
    fill(255, 255, 255);
    noStroke();

    textSize(this.size);
    textFont("Helvetica");
    text("Shoot twenty bubbles!", this.x, this.y);
    text("Bubbles Shot: " + game_score, this.x, this.y + 25);
  }

  // END GAME FUNCTION
  endGame(score) {
    if (score >= 20) {
      // Reset score to zero
      score = 0;
      startGame();
    }
  }
}
