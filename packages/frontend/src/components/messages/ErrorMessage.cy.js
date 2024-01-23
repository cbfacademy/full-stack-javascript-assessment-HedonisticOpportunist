import React from "react";
import ErrorMessage from "./ErrorMessages";

describe("<ErrorMessage />", () => {
  it("renders the ErrorMessage component", () => {
    cy.mount(<ErrorMessage />);
  });
});
