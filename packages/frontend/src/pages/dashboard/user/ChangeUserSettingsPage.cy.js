import React from "react";
import ChangeUserSettingsPage from "./ChangeUserSettingsPage";

describe("<ChangeUserSettingsPage />", () => {
  it("renders the ChangeUserSettingsPage component", () => {
    cy.mount(<ChangeUserSettingsPage />);
  });

  it("renders the 'Change User Settings' h3 heading", () => {
    cy.mount(<ChangeUserSettingsPage />);
    cy.contains("h3", "Change User Settings ᓚᘏᗢ");
  });

  it("renders the 'Change your...' text", () => {
    cy.mount(<ChangeUserSettingsPage />);
    cy.contains("p", "Change your username or email here.");
  });

  it("renders the 'Change Your Email or Username' h4 heading", () => {
    cy.mount(<ChangeUserSettingsPage />);
    cy.contains("h4", "Change Your Email or Username^•^*");
  });
});
