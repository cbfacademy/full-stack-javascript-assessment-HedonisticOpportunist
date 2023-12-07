import React from "react";
import GamesPage from "./GamesPage";

describe("<GamesPage />", () => {
  it("renders the GamesPage component", () => {
    cy.mount(<GamesPage />);
  });

  it("renders the 'Games' h3 header", () => {
    cy.mount(<GamesPage />);
    cy.contains("h3", "Games");
  });

  it("renders the 'You can find a...' text", () => {
    cy.mount(<GamesPage />);
    cy.contains("p", "You can find a collection of games below.");
  });

  it("renders the 'The games load on a new page...' text", () => {
    cy.mount(<GamesPage />);
    cy.contains(
      "p",
      "The games load on a new page. To return to the homepage, hit the browser's back button."
    );
  });

  it("renders the 'Chase Bubbles Games' h4 header", () => {
    cy.mount(<GamesPage />);
    cy.contains("h4", "Chase Bubbles Game ♡");
  });

  it("renders the 'Chase Bubbles Games' description text", () => {
    cy.mount(<GamesPage />);
    cy.contains("p", "Try and catch ten bubbles 🫧.");
  });

  it("renders the 'Space Bubble Shooter Game' h4 header", () => {
    cy.mount(<GamesPage />);
    cy.contains("h4", "Space Bubble Shooter Game ♡");
  });

  it("renders the 'Space Bubble Shooter Game' description text", () => {
    cy.mount(<GamesPage />);
    cy.contains("p", "Shoot or catch twenty bubbles 🫧👾.");
  });
});
