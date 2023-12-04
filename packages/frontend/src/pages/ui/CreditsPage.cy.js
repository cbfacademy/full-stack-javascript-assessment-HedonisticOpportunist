import React from "react";
import CreditsPage from "./CreditsPage";

describe("<CreditsPage />", () => {
  it("renders the CreditsPage component", () => {
    cy.mount(<CreditsPage />);
  });

  it("renders the 'Credits' h4 header", () => {
    cy.mount(<CreditsPage />);
    cy.contains("h4", "Credits");
  });

  it("renders the 'A project never lives...' text", () => {
    cy.mount(<CreditsPage />);
    cy.contains(
      "p",
      "A project never lives in isolation; the following images helped make Space Cats the bright and happy place it is now."
    );
  });
});
