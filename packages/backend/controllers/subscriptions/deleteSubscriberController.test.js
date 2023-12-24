const { deleteSubscriber } = require("./deleteSubscriberController");

describe("Testing the deleteSubscriber function.", () => {
  it("Expect deleteSubscriber to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    deleteSubscriber(mockCallback);

    // ARRANGE
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
