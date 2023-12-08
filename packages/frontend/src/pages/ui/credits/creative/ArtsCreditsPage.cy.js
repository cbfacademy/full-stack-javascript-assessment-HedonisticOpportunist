import React from "react";
import ArtsCreditsPage from "./ArtsCreditPage";

describe("<ArtsCreditsPage />", () => {
  it("renders the ArtsCreditsPage component", () => {
    cy.mount(<ArtsCreditsPage />);
  });

  it("renders the 'Interactive Art Image Credits' h3 header", () => {
    cy.mount(<ArtsCreditsPage />);
    cy.contains("h3", "Interactive Art Image Credits");
  });

  it("renders the 'The following images...' text", () => {
    cy.mount(<ArtsCreditsPage />);
    cy.contains(
      "p",
      "The following images are used on the Interactive Arts Page."
    );
  });
});
