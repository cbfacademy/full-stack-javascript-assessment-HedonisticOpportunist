import React from "react";
import SubscribeForm from "./SubscribeForm";

describe("<SubscribeForm />", () => {
  it("renders the SubscribeForm component", () => {
    cy.mount(<SubscribeForm />);
  });

  it("renders the 'Email Address' label text", () => {
    cy.mount(<SubscribeForm />);
    cy.contains("label", "Email address");
  });

  it("renders the 'Subscribe' button text", () => {
    cy.mount(<SubscribeForm />);
    cy.contains("button", "🐻‍❄️Suscribe to our newsletter.");
  });

  it("renders the 'Reset Form' button text", () => {
    cy.mount(<SubscribeForm />);
    cy.contains("button", "🐻‍❄️Reset Form.");
  });
});
