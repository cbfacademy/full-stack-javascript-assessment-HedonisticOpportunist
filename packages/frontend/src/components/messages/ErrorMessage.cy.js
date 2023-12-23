import React from "react";
import ErrorMessage from "./ErrorMessages";

describe("<ErrorMessage />", () => {
  it("renders ErrorMessage component", () => {
    cy.mount(<ErrorMessage />);
  });
});
