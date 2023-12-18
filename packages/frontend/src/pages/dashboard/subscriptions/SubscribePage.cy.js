import React from "react";
import SubscribePage from "./SubscribePage";

describe("<SubscribePage />", () => {
  it("renders the SubscribePage component", () => {
    cy.mount(<SubscribePage />);
  });

  it("renders the 'Welcome To Our Internal Newsletter' h3 header", () => {
    cy.mount(<SubscribePage />);
    cy.contains("h3", "Welcome To Our Internal Newsletter ᓚᘏᗢ");
  });

  it("renders the 'If you want to ...' text", () => {
    cy.mount(<SubscribePage />);
    cy.contains(
      "p",
      "If you want to keep in touch with any moderator-approved art or games, please sign up for our newsletter."
    );
  });

  it("renders the 'You can...' text", () => {
    cy.mount(<SubscribePage />);
    cy.contains(
      "p",
      "You can subscribe using the email you signed up with or another one. It's up to you!"
    );
  });

  it("renders the 'Of course...' text", () => {
    cy.mount(<SubscribePage />);
    cy.contains(
      "p",
      "Of course, you are welcome to unsubscribe at any time ♡🐾."
    );
  });

  it("renders the 'Subscribe To Our Internal Newsletter' h4 header", () => {
    cy.mount(<SubscribePage />);
    cy.contains("h4", "Subscribe To Our Internal Newsletter ᓚᘏᗢ ♡");
  });
});
