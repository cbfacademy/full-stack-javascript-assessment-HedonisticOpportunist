const { createSecretToken } = require("./secretToken");

describe("Testing the createSecretToken function.", () => {
  it.skip("Expect createSecretToken to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    createSecretToken(mockCallback);

    // ARRANGE
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
