import React from "react";
import ChangeUserNameForm from "./ChangeUserNameForm";

describe("<ChangeUserNameForm />", () => {
  it("renders the ChangeUserNameForm component", () => {
    cy.mount(<ChangeUserNameForm />);
  });

  it("renders the 'Change Username' label text", () => {
    cy.mount(<ChangeUserNameForm />);
    cy.contains("label", "Change Username");
  });

  it("renders the 'Change Username' button text", () => {
    cy.mount(<ChangeUserNameForm />);
    cy.contains("button", "🐻‍❄️Change Username");
  });
});
