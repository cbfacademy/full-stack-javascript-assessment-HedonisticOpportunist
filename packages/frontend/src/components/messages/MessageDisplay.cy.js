import React from "react";
import MessageDisplay from "./MessageDisplay";

describe("<MessageDisplay />", () => {
  it("renders the MessageDisplay component", () => {
    cy.mount(<MessageDisplay />);
  });
});
