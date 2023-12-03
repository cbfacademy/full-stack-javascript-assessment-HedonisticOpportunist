import React from "react";
import DashboardHeader from "./DashboardHeader";

describe("<DashboardHeader />", () => {
  it("renders", () => {
    cy.mount(<DashboardHeader />);
  });
});
