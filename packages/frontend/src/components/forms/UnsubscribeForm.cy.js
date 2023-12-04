import React from "react";
import UnsubscribeForm from "./UnsubscribeForm";

describe("<UnsubscribeForm />", () => {
  it("renders the UnsubscribeForm component", () => {
    cy.mount(<UnsubscribeForm />);
  });

  it("renders the 'Email Address' label text", () => {
    cy.mount(<UnsubscribeForm />);
    cy.contains("label", "Email address");
  });

  it("renders the 'Unsubscribe' button text", () => {
    cy.mount(<UnsubscribeForm />);
    cy.contains("button", "🐾Unsubscribe from our newsletter.");
  });
});
