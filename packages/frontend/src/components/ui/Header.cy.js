import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("renders the header component", () => {
    cy.mount(<Header />);
  });

  it("contains the 'Space Cats' header", () => {
    cy.mount(<Header />);
    cy.contains("h1", "Space Cats");
  });
});
