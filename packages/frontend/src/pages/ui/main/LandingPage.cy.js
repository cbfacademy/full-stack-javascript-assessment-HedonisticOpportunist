import React from "react";
import LandingPage from "./LandingPage";

describe("<LandingPage />", () => {
  it("renders the LandingPage component", () => {
    cy.mount(<LandingPage />);
  });

  it("renders the 'Games and ... Silly Cats' h2 header", () => {
    cy.mount(<LandingPage />);
    cy.contains("h2", "Silly Games and ... Cats!");
  });

  it("renders the 'Space Cats is your...' text", () => {
    cy.mount(<LandingPage />);
    cy.contains(
      "p",
      "Space Cats is your friendly haunt on the web for playing silly games 𓃠."
    );
  });

  it("renders the 'Grab a cup of milk...' text", () => {
    cy.mount(<LandingPage />);
    cy.contains("p", "Grab a cup of milk and feel free to explore ₍^._.^₎ 𐒡.");
  });

  it("renders the 'Please be warned...' text", () => {
    cy.mount(<LandingPage />);
    cy.contains(
      "p",
      "Please be warned: there are a lot of emojis on this site."
    );
  });

  it("renders the 'Please sign up/register...' text", () => {
    cy.mount(<LandingPage />);
    cy.contains(
      "p",
      "Please sign up/register to subscribe to our newsletter or upload your art/game."
    );
  });
});
