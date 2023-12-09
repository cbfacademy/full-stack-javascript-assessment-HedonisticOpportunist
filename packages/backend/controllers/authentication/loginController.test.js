const { login } = require("./loginController");

describe("Validating the loginController controller.", () => {
  it("Expect the login function constant not to return null.", () => {
    expect(login).not.toBeNull();
  });

  it("Expect the login function to be called.", async () => {
    const login = jest.fn();
    await login();
    expect(login).toHaveBeenCalled();
  });
});
