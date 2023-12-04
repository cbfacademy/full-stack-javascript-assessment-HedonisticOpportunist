const { logout } = require("./logoutController");

describe("Validating the logoutController controller.", () => {
  it("Expect the log out function constant not to return null.", () => {
    expect(logout).not.toBeNull();
  });
});
