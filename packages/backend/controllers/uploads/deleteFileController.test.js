const { deleteFile } = require("./deleteFileController");

describe("Testing the deleteFile function.", () => {
  it("Expect deleteFile to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    deleteFile(mockCallback);

    // ASSERT
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
