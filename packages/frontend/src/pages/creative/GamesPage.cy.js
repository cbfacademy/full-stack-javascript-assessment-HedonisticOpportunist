import React from "react";
import GamesPage from "./GamesPage";

describe("<GamesPage />", () => {
  it("renders the Games Page component", () => {
    cy.mount(<GamesPage />);
  });

  it("contains the 'Games' h3 header", () => {
    cy.mount(<GamesPage />);
    cy.contains("h3", "Games");
  });

  it("contains the 'Find a collection of games' text", () => {
    cy.mount(<GamesPage />);
    cy.contains("p", "Find a collection of games below.");
  });

  it("contains the 'Chase Bubbles Games' h4 header", () => {
    cy.mount(<GamesPage />);
    cy.contains("h4", "Chase Bubbles Game ♡");
  });

  it("contains the 'Chase Bubbles Games' link text", () => {
    cy.mount(<GamesPage />);
    cy.contains("a", "Catch bubbles.");
  });

  it("contains the 'Chase Bubbles Games' description text", () => {
    cy.mount(<GamesPage />);
    cy.contains("p", "Try and catch ten bubbles 🫧.");
  });

  it("contains the 'Space Bubble Shooter Game' h4 header", () => {
    cy.mount(<GamesPage />);
    cy.contains("h4", "Space Bubble Shooter Game ♡");
  });

  it("contains the 'Space Bubble Shooter Game' link text", () => {
    cy.mount(<GamesPage />);
    cy.contains("a", "Shoot at bubbles");
  });

  it("contains the 'Space Bubble Shooter Game' description text", () => {
    cy.mount(<GamesPage />);
    cy.contains("p", "Shoot or catch twenty bubbles 🫧👾.");
  });
});
