import React from "react";
import CreditsBreadcrumbs from "./CreditsBreadcrumbs";

describe("<CreditsBreadcrumbs />", () => {
  it("renders the CreditsBreadcrumbs component", () => {
    cy.mount(<CreditsBreadcrumbs />);
  });

  it("renders the link text for the 'Return to Homepage' navigation", () => {
    cy.mount(<CreditsBreadcrumbs />);
    cy.contains("a", "🐾Return to Homepage");
  });

  it("renders the link text for the 'Return to Credits' navigation", () => {
    cy.mount(<CreditsBreadcrumbs />);
    cy.contains("a", "🐾Return to Credits");
  });
});
