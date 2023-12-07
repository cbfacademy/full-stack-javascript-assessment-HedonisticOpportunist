import React from "react";
import InteractiveArtPage from "./InteractiveArtPage";

describe("<InteractiveArtPage />", () => {
  it("renders the InteractiveArtPage component", () => {
    cy.mount(<InteractiveArtPage />);
  });

  it("renders the 'Interactive Art Page' h3 header", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("h3", "Interactive Art");
  });

  it("renders the 'Find an assortment of interactive art...' text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("p", "Find an assortment of interactive art pieces below.");
  });

  it("renders the 'So that you know...' text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains(
      "p",
      "So that you know, the interactive art loads on a new page. To return to the homepage, hit the browser's back button."
    );
  });

  it("renders the 'Floating Space Cat' h4 header", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("h4", "Floating Space Cat ♡");
  });

  it("renders the 'Floating Space Cat' description text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains(
      "p",
      "Move an image of a space cat using your mouse coordinates."
    );
  });

  it("renders the 'Many Cats' h4 header", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("h4", "Many Cats ♡");
  });

  it("renders the 'Many Cats' description text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains(
      "p",
      "Watch the scene fill up with the same cat image across a screen -- click 'Reload' to see it happen again."
    );
  });
});
