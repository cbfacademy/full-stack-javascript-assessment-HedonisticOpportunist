import React from "react";
import UnsubscribeForm from "./UnsubscribeForm";

describe("<UnsubscribeForm />", () => {
  it("renders the Unsubscribe Form component", () => {
    cy.mount(<UnsubscribeForm />);
  });

  it("contains the email address label text", () => {
    cy.mount(<UnsubscribeForm />);
    cy.contains("label", "Email address");
  });

  it("contains the Unsuscribe button text", () => {
    cy.mount(<UnsubscribeForm />);
    cy.contains("button", "🐾Unsubscribe from our newsletter.");
  });
});
