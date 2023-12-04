import React from "react";
import LoginPage from "./LoginPage";

describe("<LoginPage />", () => {
  it("renders the LoginPage component", () => {
    cy.mount(<LoginPage />);
  });

  it("renders the 'Login' h3 header", () => {
    cy.mount(<LoginPage />);
    cy.contains("h3", "Login ᓚᘏᗢ");
  });

  it("renders the 'don't have an account?' text", () => {
    cy.mount(<LoginPage />);
    cy.contains("p", "Don't have an account?");
  });

  it("renders the 'Sign up' link text", () => {
    cy.mount(<LoginPage />);
    cy.contains("a", "Sign up");
  });

  it("renders the 'Login Here' h4 header", () => {
    cy.mount(<LoginPage />);
    cy.contains("h4", "Login Here: ⋆⭒˚｡⋆ ");
  });
});
