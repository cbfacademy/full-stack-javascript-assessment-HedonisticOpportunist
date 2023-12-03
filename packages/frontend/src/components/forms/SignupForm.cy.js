import React from "react";
import SignupForm from "./SignupForm";

describe("<SignupForm />", () => {
  it("renders the Signup Form component", () => {
    cy.mount(<SignupForm />);
  });

  it("contains the username label", () => {
    cy.mount(<SignupForm />);
    cy.contains("label", "Username");
  });

  it("contains the email address label", () => {
    cy.mount(<SignupForm />);
    cy.contains("label", "Email address");
  });

  it("contains the password label", () => {
    cy.mount(<SignupForm />);
    cy.contains("label", "Password");
  });

  it("contains the 'Sign Up' button text", () => {
    cy.mount(<SignupForm />);
    cy.contains("button", "🐾Sign Up");
  });
});
