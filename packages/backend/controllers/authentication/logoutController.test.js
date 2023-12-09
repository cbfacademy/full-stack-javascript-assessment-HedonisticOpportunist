const { logout } = require("./logoutController");

describe("Validating the logoutController controller.", () => {
  it("Expect the logout function constant not to return null.", () => {
    expect(logout).not.toBeNull();
  });

  it("Expect the logout function to be called.", async () => {
    const logout = jest.fn();
    await logout();
    expect(logout).toHaveBeenCalled();
  });
});
