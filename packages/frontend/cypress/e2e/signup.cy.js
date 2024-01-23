describe("signup spec", () => {
  it("allows the user to sign up with a username, email and password", () => {
    cy.visit("https://space-cats.vercel.app/signup");
    cy.get('input[type="username"]').type("testUser");
    cy.get('input[type="email"]').type("test@test.com");
    cy.get('input[type="password"]').type("test1234");
    cy.get("button").contains("Sign Up").click();
  });
});
