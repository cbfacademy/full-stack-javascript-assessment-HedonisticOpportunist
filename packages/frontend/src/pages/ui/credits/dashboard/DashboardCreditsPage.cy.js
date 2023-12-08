import React from "react";
import DashboardCreditsPage from "./DashboardCreditsPage";

describe("<DashboardCreditsPage />", () => {
  it("renders the DashboardCreditsPage component", () => {
    cy.mount(<DashboardCreditsPage />);
  });

  it("renders the 'Dashboard Image Credits' h3 heading", () => {
    cy.mount(<DashboardCreditsPage />);
    cy.contains("h3", "Dashboard Image Credits");
  });

  it("renders the 'The following images' text", () => {
    cy.mount(<DashboardCreditsPage />);
    cy.contains("p", "The following images are used on the Dashboard Page.");
  });
});
