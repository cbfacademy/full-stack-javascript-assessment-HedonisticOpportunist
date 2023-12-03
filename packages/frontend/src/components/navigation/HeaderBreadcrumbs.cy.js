import React from "react";
import HeaderBreadcrumbs from "./HeaderBreadcrumbs";

describe("<HeaderBreadcrumbs />", () => {
  it("renders the Header Breadcrumbs component", () => {
    cy.mount(<HeaderBreadcrumbs />);
  });

  it("contains the link text for the 'Home' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🐾Home");
  });

  it("contains the link text for the 'Games' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🐾Games");
  });

  it("contains the link text for the 'Interactive Art' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🐾Interactive Art");
  });

  it("contains the link text for the 'Credits' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🐾Credits");
  });

  it("contains the link text for the 'Login / Signup' navigation", () => {
    cy.mount(<HeaderBreadcrumbs />);
    cy.contains("a", "🐾Login | Signup");
  });
});
