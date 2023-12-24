const { userVerification } = require("./userMiddleware");

describe("Testing the userVerification function.", () => {
  it("Expect userVerification to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    userVerification(mockCallback);

    // ARRANGE
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
