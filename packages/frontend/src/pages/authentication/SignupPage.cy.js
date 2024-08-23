import React from "react";
import SignupPage from "./SignupPage";

describe("<SignupPage />", () => {
  it("renders the SignupPage component", () => {
    cy.mount(<SignupPage />);
  });

  it("renders the 'Register' h3 header", () => {
    cy.mount(<SignupPage />);
    cy.contains("h3", "Register ᓚᘏᗢ");
  });

  it("renders the 'already have an account?' text", () => {
    cy.mount(<SignupPage />);
    cy.contains("p", "Already have an account?");
  });

  it("renders the 'Login' link text", () => {
    cy.mount(<SignupPage />);
    cy.contains("a", "Login");
  });

  it("renders the 'Sign Up Here' h4 header", () => {
    cy.mount(<SignupPage />);
    cy.contains("h4", "Sign Up Here: ♫₊˚.🎧 ✩｡ ♡");
  });
});
