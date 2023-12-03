import React from "react";
import InteractiveArtPage from "./InteractiveArtPage";

describe("<InteractiveArtPage />", () => {
  it("renders the Interactive Art Page component", () => {
    cy.mount(<InteractiveArtPage />);
  });

  it("renders the 'Interactive Art Page' h3 header", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("h3", "Interactive Art");
  });

  it("contains the 'find an assortment of interactive art' text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("p", "Find an assortment of interactive art pieces below.");
  });

  it("contains the 'please be aware' text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains(
      "p",
      "Please be aware that the interactive art loads on a new page. To return to the homepage, hit the browser's back button."
    );
  });

  it("contains the 'Floating Space Cat' h4 header", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("h4", "Floating Space Cat ♡");
  });

  it("contains the 'Floating Space Cat' link text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("a", "Move the floating space cat.");
  });

  it("contains the 'Floating Space Cat' description text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains(
      "p",
      "Move an image of a space cat using your mouse coordinates."
    );
  });

  it("contains the 'Many Cats' h4 header", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("h4", "Many Cats ♡");
  });

  it("contains the 'Many Cats' link text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains("a", "Watch the scene fill up with many cats.");
  });

  it("contains the 'Many Cats' description text", () => {
    cy.mount(<InteractiveArtPage />);
    cy.contains(
      "p",
      "Watch the scene fill up with the same cat image across a screen -- click 'Reload' to see it happen again."
    );
  });
});
