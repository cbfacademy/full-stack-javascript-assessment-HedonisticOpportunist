import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("renders the Header component", () => {
    cy.mount(<Header />);
  });

  it("renders the 'Space Cats' header", () => {
    cy.mount(<Header />);
    cy.contains("h1", "Space Cats");
  });
});
