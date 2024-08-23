import React from "react";
import UploadedFilesPage from "./UploadedFilesPage";

describe("<UploadedFilesPage />", () => {
  it("renders the UploadedFilesPage component", () => {
    cy.mount(<UploadedFilesPage />);
  });

  it("renders the 'Uploaded Files' h4 header", () => {
    cy.mount(<UploadedFilesPage />);
    cy.contains("h4", "Uploaded Files ᓚᘏᗢ ♡");
  });

  it("renders the 'View uploaded ...' text", () => {
    cy.mount(<UploadedFilesPage />);
    cy.contains("p", "View uploaded files here 🐍.");
  });

  it("renders the 'Title' column", () => {
    cy.mount(<UploadedFilesPage />);
    cy.contains("th", "|Title|");
  });

  it("renders the 'Description' column", () => {
    cy.mount(<UploadedFilesPage />);
    cy.contains("th", "|Description|");
  });

  it("renders the 'Link' column", () => {
    cy.mount(<UploadedFilesPage />);
    cy.contains("th", "|Link|");
  });
});
