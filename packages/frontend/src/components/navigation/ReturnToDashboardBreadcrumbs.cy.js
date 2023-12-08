import React from "react";
import ReturnToDashboardBreadcrumbs from "./ReturnToDashboardBreadcrumbs";

describe("<ReturnToDashboardBreadcrumbs />", () => {
  it("renders the ReturnToDashboardBreadcrumbs component", () => {
    cy.mount(<ReturnToDashboardBreadcrumbs />);
  });

  it("renders the 'Return to Dashboard' link text", () => {
    cy.mount(<ReturnToDashboardBreadcrumbs />);
    cy.contains("a", "👾Return to Dashboard");
  });
});
