import React from "react";
import UploadWorkForm from "./UploadWorkForm";

describe("<UploadWorkForm />", () => {
  it("renders the Upload Work Form component", () => {
    cy.mount(<UploadWorkForm />);
  });

  it("contains the title label", () => {
    cy.mount(<UploadWorkForm />);
    cy.contains("label", "Title");
  });

  it("contains the description label", () => {
    cy.mount(<UploadWorkForm />);
    cy.contains("label", "Description");
  });

  it("contains the URL label", () => {
    cy.mount(<UploadWorkForm />);
    cy.contains("label", "URL");
  });

  it("contains the 'Upload Work' button text", () => {
    cy.mount(<UploadWorkForm />);
    cy.contains("button", "🐾Upload Work.");
  });
});
