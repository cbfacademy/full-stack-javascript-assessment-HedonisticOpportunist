import React from "react";
import UploadWorkPage from "./UploadWorkPage";

describe("<UploadWorkPage />", () => {
  it("renders the UploadWorkPage component", () => {
    cy.mount(<UploadWorkPage />);
  });

  it("renders the 'Upload Link to Your Interactive Art / Game' h3 heading", () => {
    cy.mount(<UploadWorkPage />);
    cy.contains("h3", "Upload Link to Your Interactive Art / Game ᓚᘏᗢ");
  });

  it("renders the 'Upload a link to...' text", () => {
    cy.mount(<UploadWorkPage />);
    cy.contains("p", "Upload a link to your interactive art or game.");
  });

  it("renders the 'A moderator will...' text", () => {
    cy.mount(<UploadWorkPage />);
    cy.contains(
      "p",
      "A moderator will have a look and then add it to the main page."
    );
  });

  it("renders the 'Upload Your Work' h4 heading", () => {
    cy.mount(<UploadWorkPage />);
    cy.contains("h4", "Upload Your Work ^•^*");
  });
});
