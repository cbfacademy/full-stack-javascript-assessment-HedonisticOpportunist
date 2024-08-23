import React from "react";
import ImageCreditsPage from "./ImageCreditsPage";

describe("<ImageCreditsPage />", () => {
  it("renders the ImageCreditsPage component", () => {
    cy.mount(<ImageCreditsPage />);
  });

  it("renders the 'Image Credits Page' h3 header", () => {
    cy.mount(<ImageCreditsPage />);
    cy.contains("h3", "Image Credits Page");
  });

  it("renders the 'The following page displays...' text", () => {
    cy.mount(<ImageCreditsPage />);
    cy.contains(
      "p",
      "The following page displays the images used throughout the main pages of Space Cats."
    );
  });
});
