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
    text("Bubbles Collected: " + game_score, this.x, this.y);
  }
}
