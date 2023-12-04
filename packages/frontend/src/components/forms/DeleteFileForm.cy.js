import React from "react";
import DeleteFileForm from "./DeleteFileForm";

describe("<DeleteFileForm />", () => {
  it("renders the DeleteFileForm component", () => {
    cy.mount(<DeleteFileForm />);
  });

  it("renders the 'Uploaded Work Link' label text", () => {
    cy.mount(<DeleteFileForm />);
    cy.contains("label", "Uploaded Work Link");
  });

  it("renders the 'Delete Files' button text", () => {
    cy.mount(<DeleteFileForm />);
    cy.contains("button", "🐾 Delete Files");
  });
});
