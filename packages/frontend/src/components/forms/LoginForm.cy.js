import React from "react";
import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  it("renders the Login Form component", () => {
    cy.mount(<LoginForm />);
  });

  it("contains the email address label", () => {
    cy.mount(<LoginForm />);
    cy.contains("label", "Email address");
  });

  it("contains the password address label", () => {
    cy.mount(<LoginForm />);
    cy.contains("label", "Password");
  });

  it("contains the button 'Login' text", () => {
    cy.mount(<LoginForm />);
    cy.contains("button", "🐾Login");
  });
});
