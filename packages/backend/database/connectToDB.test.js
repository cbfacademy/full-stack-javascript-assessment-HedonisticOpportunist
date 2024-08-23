const { connectToMongoDB } = require("./connectToDB");

describe("Testing the connectToMongoDB function.", () => {
  it("Expect connectToMongoDB to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    connectToMongoDB(mockCallback);

    // ASSERT
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
