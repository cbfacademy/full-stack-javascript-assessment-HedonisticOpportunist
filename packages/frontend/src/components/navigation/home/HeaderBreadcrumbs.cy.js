import React from "react";
import HeaderBreadcrumbs from "./HeaderBreadcrumbs";

describe("<HeaderBreadcrumbs />", () => {
  it("renders the HeaderBreadcrumbs component", () => {
    cy.mount(<HeaderBreadcrumbs />);
  });

  it("renders the link text for the 'Home' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🌑Home");
  });

  it("renders the link text for the 'Games' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🌑Games");
  });

  it("renders the link text for the 'Interactive Art' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🌑Interactive Art");
  });

  it("renders the link text for the 'Credits' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🌑Credits");
  });

  it("renders the link text for the 'Login | Signup' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🌑Login | Signup");
  });
});
