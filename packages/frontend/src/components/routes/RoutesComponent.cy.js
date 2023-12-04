import React from "react";
import RoutesComponent from "./RoutesComponent";

describe("<RoutesComponent />", () => {
  it("renders the RoutesComponent component", () => {
    cy.mount(<RoutesComponent />);
  });
});
