const { getSubscribers } = require("./getSubscribersController");

describe("Testing the getSubscribers function.", () => {
  it("Expect getSubscribers to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    getSubscribers(mockCallback);

    // ASSERT
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
