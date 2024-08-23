import React from "react";
import CreditsPage from "./CreditsPage";

describe("<CreditsPage />", () => {
  it("renders the CreditsPage component", () => {
    cy.mount(<CreditsPage />);
  });

  it("renders the 'Links to Credit Pages:' h4 header", () => {
    cy.mount(<CreditsPage />);
    cy.contains("h4", "Links to Credit Pages:");
  });

  it("renders the 'A project never lives...' text", () => {
    cy.mount(<CreditsPage />);
    cy.contains(
      "p",
      "A project never lives in isolation; the following images helped make Space Cats the bright and happy place it is now."
    );
  });

  it("renders the 'Other credits...' partial text", () => {
    cy.mount(<CreditsPage />);
    cy.contains(
      "p",
      "Other credits -- related to code and assets used within the art/games --"
    );
  });

  it("renders the 'can be found...' partial link text", () => {
    cy.mount(<CreditsPage />);
    cy.contains("a", "can be found in the project's documentation.");
  });

  it("renders the link text for the 'Interactive Art Image Credits' navigation", () => {
    cy.mount(<CreditsPage />);
    cy.contains("a", "🐅Interactive Art Image Credits");
  });

  it("renders the link text for the 'Dashboard Image Credits' navigation", () => {
    cy.mount(<CreditsPage />);
    cy.contains("a", "🐅Dashboard Image Credits");
  });

  it("renders the link text for the 'Image Credits' navigation", () => {
    cy.mount(<CreditsPage />);
    cy.contains("a", "🐅Image Credits");
  });

  it("renders the link text for the 'Game Image Credits' navigation", () => {
    cy.mount(<CreditsPage />);
    cy.contains("a", "🐅Game Image Credits");
  });
});
