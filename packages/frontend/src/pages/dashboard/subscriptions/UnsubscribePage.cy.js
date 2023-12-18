import React from "react";
import UnsubscribePage from "./UnsubscribePage";

describe("<UnsubscribePage />", () => {
  it("renders the UnsubscribePage component", () => {
    cy.mount(<UnsubscribePage />);
  });

  it("renders the 'Unsubscribe From Our Internal Newsletter' h3 header", () => {
    cy.mount(<UnsubscribePage />);
    cy.contains("h3", "Unsubscribe From Our Internal Newsletter ᓚᘏᗢ");
  });

  it("renders the 'We're sad to see you go...' text", () => {
    cy.mount(<UnsubscribePage />);
    cy.contains("p", "We're sad to see you go! 🦊.");
  });

  it("renders the 'Unsubscribe From Our Internal Newsletter' h4 header", () => {
    cy.mount(<UnsubscribePage />);
    cy.contains("h4", "Unsubscribe From Our Internal Newsletter ᓚᘏᗢ ♡");
  });
});
