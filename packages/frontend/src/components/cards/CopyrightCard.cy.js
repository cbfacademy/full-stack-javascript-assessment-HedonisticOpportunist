import React from "react";
import CopyrightCard from "./CopyrightCard";

describe("<CopyrightCard />", () => {
  it("renders the CopyrightCard component", () => {
    cy.mount(<CopyrightCard />);
  });

  it("renders the 'Credit:' text", () => {
    cy.mount(<CopyrightCard />);
    cy.contains("p", "Credit:");
  });
});
