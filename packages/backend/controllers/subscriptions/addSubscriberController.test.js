const { addSubscriber } = require("./addSubscriberController");

describe("Testing the addSubscriber function.", () => {
  it("Expect addSubscriber to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    addSubscriber(mockCallback);

    // ASSERT
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
