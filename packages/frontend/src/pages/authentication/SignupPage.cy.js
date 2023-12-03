import React from "react";
import SignupPage from "./SignupPage";

describe("<SignupPage />", () => {
  it("renders the Sign Up Page component", () => {
    cy.mount(<SignupPage />);
  });

  it("contains the 'register' h3 header", () => {
    cy.mount(<SignupPage />);
    cy.contains("h3", "Register ᓚᘏᗢ");
  });

  it("contains the 'already have an account?' text", () => {
    cy.mount(<SignupPage />);
    cy.contains("p", "Already have an account?");
  });

  it("contains the 'login' link", () => {
    cy.mount(<SignupPage />);
    cy.contains("a", "Login");
  });

  it("contains the 'sign up here' div", () => {
    cy.mount(<SignupPage />);
    cy.contains("div", "Sign Up Here: ♫₊˚.🎧 ✩｡");
  });
});
