const { signup } = require("./signupController");

describe("Testing the signup function.", () => {
  it("Expect signup to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    signup(mockCallback);

    // ARRANGE
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
