const { login } = require("./loginController");

describe("Validating the user controller.", () => {
  it("Expect the login function constant not to return null.", () => {
    expect(login).not.toBeNull();
  });
});
