import React from "react";
import DashboardBreadcrumbs from "./DashboardBreadcrumbs";

describe("<DashboardBreadcrumbs />", () => {
  it("renders the Dashboard Breadcrumbs component", () => {
    cy.mount(<DashboardBreadcrumbs />);
  });

  it("contains the link text for the 'Upload Link / Games' navigation", () => {
    cy.mount(<DashboardBreadcrumbs />);
    cy.contains("a", "🐾Upload Link To Art | Games");
  });

  it("contains the link text for the 'View Uploaded Work' navigation", () => {
    cy.mount(<DashboardBreadcrumbs />);
    cy.contains("a", "🐾View Uploaded Work");
  });

  it("contains the link text for the 'Subscribe / Unsubscribe To Newsletter' navigation", () => {
    cy.mount(<DashboardBreadcrumbs />);
    cy.contains("a", "🐾 Subscribe | Unsubscribe To Newsletter");
  });
});
