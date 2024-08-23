import React from "react";
import DashboardHeader from "./DashboardHeader";

describe("<DashboardHeader />", () => {
  it("renders the DashboardHeader component", () => {
    cy.mount(<DashboardHeader />);
  });

  it("renders the 'Space Cats' header", () => {
    cy.mount(<DashboardHeader />);
    cy.contains("h1", "Space Cats");
  });
});
