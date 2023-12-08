import React from "react";
import SignupForm from "./SignupForm";

describe("<SignupForm />", () => {
  it("renders the SignupForm component", () => {
    cy.mount(<SignupForm />);
  });

  it("renders the 'Username' label text", () => {
    cy.mount(<SignupForm />);
    cy.contains("label", "Username");
  });

  it("renders the 'Email Address' label text", () => {
    cy.mount(<SignupForm />);
    cy.contains("label", "Email address");
  });

  it("renders the 'Password' label text", () => {
    cy.mount(<SignupForm />);
    cy.contains("label", "Password");
  });

  it("renders the 'Sign Up' button text", () => {
    cy.mount(<SignupForm />);
    cy.contains("button", "🐾Sign Up");
  });
});
