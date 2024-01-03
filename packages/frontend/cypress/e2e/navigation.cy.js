describe("navigation spec", () => {
  it("allows the user to navigate through the various tabs", () => {
    cy.visit("https://space-cats.vercel.app");
    cy.get("a").contains("Credits").click();
    cy.get("a").contains("Return to Homepage").click();
    cy.get("a").contains("Games").click();
    cy.get("a").contains("Return to Homepage").click();
    cy.get("a").contains("Interactive Art").click();
    cy.get("a").contains("Return to Homepage").click();
    cy.get("a").contains("Login | Signup").click();
    cy.get("a").contains("Return to Homepage").click();
  });
});
