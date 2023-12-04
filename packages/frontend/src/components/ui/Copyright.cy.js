import React from "react";
import Copyright from "./Copyright";

describe("<Copyright />", () => {
  it("renders the Copyright component", () => {
    cy.mount(<Copyright />);
  });
  it("renders the copyright footer text", () => {
    cy.mount(<Copyright />);
    cy.contains("footer", "Anita Pal");
  });
});
