const { getFiles } = require("./getFilesController");

describe("Testing the getFiles function.", () => {
  it("Expect getFiles to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    getFiles(mockCallback);

    // ARRANGE
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
