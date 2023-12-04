import React from "react";
import UploadWorkForm from "./UploadWorkForm";

describe("<UploadWorkForm />", () => {
  it("renders the UploadWorkForm component", () => {
    cy.mount(<UploadWorkForm />);
  });

  it("renders the Title' label text", () => {
    cy.mount(<UploadWorkForm />);
    cy.contains("label", "Title");
  });

  it("renders the 'Description' label text", () => {
    cy.mount(<UploadWorkForm />);
    cy.contains("label", "Description");
  });

  it("renders the 'URL' label text", () => {
    cy.mount(<UploadWorkForm />);
    cy.contains("label", "URL");
  });

  it("renders the 'Upload Work' button text", () => {
    cy.mount(<UploadWorkForm />);
    cy.contains("button", "🐾Upload Work.");
  });
});
