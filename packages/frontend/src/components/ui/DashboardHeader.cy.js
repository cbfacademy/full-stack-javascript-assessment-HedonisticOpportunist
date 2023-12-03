import React from "react";
import DashboardHeader from "./DashboardHeader";

describe("<DashboardHeader />", () => {
  it("renders the dashboard header component", () => {
    cy.mount(<DashboardHeader />);
  });

  it("contains the 'Space Cats' header", () => {
    cy.mount(<DashboardHeader />);
    cy.contains("h1", "Space Cats");
  });
});
