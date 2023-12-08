import React from "react";
import GameCreditsPage from "./GameCreditsPage";

describe("<GameCreditsPage />", () => {
  it("renders the GameCreditsPage component", () => {
    cy.mount(<GameCreditsPage />);
  });

  it("renders the 'Game Image Credits' h3 header", () => {
    cy.mount(<GameCreditsPage />);
    cy.contains("h3", "Game Image Credits");
  });

  it("renders the 'The following images...' text", () => {
    cy.mount(<GameCreditsPage />);
    cy.contains("p", "The following images are used on the Games Page.");
  });
});
