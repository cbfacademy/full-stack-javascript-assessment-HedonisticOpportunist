import React from "react";
import CreativeCard from "./CreativeCard";

describe("<CreativeCard />", () => {
  it("renders the CreativeCard component", () => {
    cy.mount(<CreativeCard />);
  });

  it("renders the heart emoji", () => {
    cy.mount(<CreativeCard />);
    cy.contains("h4", "♡");
  });
});
