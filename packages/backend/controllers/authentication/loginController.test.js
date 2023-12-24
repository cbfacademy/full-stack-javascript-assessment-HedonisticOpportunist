const { login } = require("./loginController");

describe("Testing the login function.", () => {
  it("Expect login to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    login(mockCallback);

    // ARRANGE
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
