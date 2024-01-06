import React from "react";
import FormButton from "./FormButton";

describe("<FormButton />", () => {
  it("renders the FormButton component", () => {
    cy.mount(<FormButton />);
    cy.get("button").should("be.visible");
  });
});
