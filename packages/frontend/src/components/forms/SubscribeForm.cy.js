import React from "react";
import SubscribeForm from "./SubscribeForm";

describe("<SubscribeForm />", () => {
  it("renders the Subscribe Form component", () => {
    cy.mount(<SubscribeForm />);
  });

  it("contains the email label text", () => {
    cy.mount(<SubscribeForm />);
    cy.contains("label", "Email address");
  });

  it("contains the 'Subscribe' button text", () => {
    cy.mount(<SubscribeForm />);
    cy.contains("button", "🐾Suscribe to our newsletter.");
  });
});
