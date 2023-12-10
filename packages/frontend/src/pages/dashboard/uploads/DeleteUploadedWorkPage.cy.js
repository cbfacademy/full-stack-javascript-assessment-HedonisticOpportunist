import React from "react";
import DeleupteUploadedWorkPage from "./DeleteUploadedWorkPage";

describe("<DeleupteUploadedWorkPage />", () => {
  it("renders the DeleupteUploadedWorkPage component", () => {
    cy.mount(<DeleupteUploadedWorkPage />);
  });

  it("renders the 'Delete Files' h3 header", () => {
    cy.mount(<DeleupteUploadedWorkPage />);
    cy.contains("h3", "Delete Files ᓚᘏᗢ");
  });

  it("renders the 'Select files ...' text", () => {
    cy.mount(<DeleupteUploadedWorkPage />);
    cy.contains("p", "Select files to delete here 🐸.");
  });

  it("renders the 'Title to Your Interactive Art / Game' h4 header", () => {
    cy.mount(<DeleupteUploadedWorkPage />);
    cy.contains("h4", "Title to Your Interactive Art / Game ᓚᘏᗢ");
  });
});
