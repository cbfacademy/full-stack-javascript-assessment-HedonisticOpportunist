import React from "react";
import HomeBreadcrumbs from "./HomeBreadcrumbs";

describe("<HomeBreadcrumbs />", () => {
  it("renders the HomeBreadcrumbs component", () => {
    cy.mount(<HomeBreadcrumbs />);
  });

  it("renders the 'Return to Homepage' link text", () => {
    cy.mount(<HomeBreadcrumbs />);
    cy.contains("a", "🐾Return to Homepage");
  });
});
