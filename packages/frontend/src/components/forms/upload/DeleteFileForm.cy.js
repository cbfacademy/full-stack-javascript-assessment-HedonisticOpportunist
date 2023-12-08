import React from "react";
import DeleteFileForm from "./DeleteFileForm";

describe("<DeleteFileForm />", () => {
  it("renders the DeleteFileForm component", () => {
    cy.mount(<DeleteFileForm />);
  });

  it("renders the 'Uploaded Work Title' label text", () => {
    cy.mount(<DeleteFileForm />);
    cy.contains("label", "Uploaded Work Title");
  });

  it("renders the 'Delete Files' button text", () => {
    cy.mount(<DeleteFileForm />);
    cy.contains("button", "🐻‍❄️Delete Files");
  });
});
