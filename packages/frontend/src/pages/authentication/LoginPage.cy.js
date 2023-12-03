import React from "react";
import LoginPage from "./LoginPage";

describe("<LoginPage />", () => {
  it("renders the Login Page component", () => {
    cy.mount(<LoginPage />);
  });

  it("contains the 'login' h3 header", () => {
    cy.mount(<LoginPage />);
    cy.contains("h3", "Login ᓚᘏᗢ");
  });

  it("contains the 'don't have an account?' text", () => {
    cy.mount(<LoginPage />);
    cy.contains("p", "Don't have an account?");
  });

  it("contains the 'sign up' link", () => {
    cy.mount(<LoginPage />);
    cy.contains("a", "Sign up");
  });

  it("contains the 'login here' h4 header", () => {
    cy.mount(<LoginPage />);
    cy.contains("h4", "Login Here: ⋆⭒˚｡⋆ ");
  });
});
