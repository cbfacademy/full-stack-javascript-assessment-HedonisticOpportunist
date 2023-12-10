describe("navigation spec", () => {
  it("allows the user to navigate", () => {
    cy.visit("http://localhost:3000");
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
