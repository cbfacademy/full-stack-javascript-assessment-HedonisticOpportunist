import React from "react";
import ChangeEmailForm from "./ChangeEmailForm";

describe("<ChangeEmailForm />", () => {
  it("renders the ChangeEmailForm component", () => {
    cy.mount(<ChangeEmailForm />);
  });

  it("renders the 'Change Email' label text", () => {
    cy.mount(<ChangeEmailForm />);
    cy.contains("label", "Change Email");
  });

  it("renders the 'Change Email' button text", () => {
    cy.mount(<ChangeEmailForm />);
    cy.contains("button", "🐻‍❄️Change Email");
  });
});
