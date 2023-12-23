import React from "react";
import MessageDisplay from "./MessageDisplay";

describe("<MessageDisplay />", () => {
  it("renders MessageDisplay component", () => {
    cy.mount(<MessageDisplay />);
  });
});
