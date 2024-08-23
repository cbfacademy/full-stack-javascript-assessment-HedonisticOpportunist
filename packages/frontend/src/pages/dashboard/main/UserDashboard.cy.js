import React from "react";
import UserDashboard from "./UserDashboard";

describe("<UserDashboard />", () => {
  it("renders the UserDashboard component", () => {
    cy.mount(<UserDashboard />);
  });

  it("renders the 'User Dashboard' h3 header", () => {
    cy.mount(<UserDashboard />);
    cy.contains("h3", "User Dashboard ᓚᘏᗢ");
  });

  it("renders the 'Welcome !' h4 header", () => {
    cy.mount(<UserDashboard />);
    cy.contains("h4", "Welcome !");
  });

  it("renders the 'It's good to see...' text", () => {
    cy.mount(<UserDashboard />);
    cy.contains("p", "It's good to see you again.");
  });

  it("renders the 'Carry out...' text", () => {
    cy.mount(<UserDashboard />);
    cy.contains(
      "p",
      "Carry out actions like uploading links to your work or subscribing to our newsletter."
    );
  });

  it.skip("renders the 'Logout' button text", () => {
    cy.mount(<UserDashboard />);
    cy.contains("button", "🐻‍❄️Logout");
  });
});
