describe("login spec", () => {
  it("allows the user to login with an email and a password", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('input[type="email"]').type("test@test.com");
    cy.get('input[type="password"]').type("test1234");
    cy.get("button").contains("Login").click();
  });
});
