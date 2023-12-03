import React from "react";
import LandingPage from "./LandingPage";

describe("<LandingPage />", () => {
  it("renders the Landing Page component", () => {
    cy.mount(<LandingPage />);
  });
});
