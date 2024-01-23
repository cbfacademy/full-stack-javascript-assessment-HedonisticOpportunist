import React from "react";
import FormCard from "./FormCard";

describe("<FormCard />", () => {
  it("renders the FormCard component", () => {
    cy.mount(<FormCard />);
  });

  it("renders the ♡ text", () => {
    cy.mount(<FormCard />);
    cy.contains("h4", "♡");
  });
});
