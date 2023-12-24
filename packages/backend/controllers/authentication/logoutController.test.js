const { logout } = require("./logoutController");

describe("Testing the logout function.", () => {
  it("Expect logout to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    logout(mockCallback);

    // ARRANGE
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
