import React from "react";
import LoginForm from "./LoginForm";

describe("<LoginForm />", () => {
  it("renders the LoginForm component", () => {
    cy.mount(<LoginForm />);
  });

  it("renders the 'Email Address' label text", () => {
    cy.mount(<LoginForm />);
    cy.contains("label", "Email address");
  });

  it("renders the 'Password' label text", () => {
    cy.mount(<LoginForm />);
    cy.contains("label", "Password");
  });

  it("renders the 'Login' button text", () => {
    cy.mount(<LoginForm />);
    cy.contains("button", "🐾Login.");
  });

  it("renders the 'Reset Form' button text", () => {
    cy.mount(<LoginForm />);
    cy.contains("button", "🐾Reset Form.");
  });
});
