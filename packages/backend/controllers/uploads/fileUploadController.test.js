const { uploadFile } = require("./fileUploadController");

describe("Testing the uploadFile function.", () => {
  it("Expect uploadFile to return 0 call backs.", () => {
    // ARRANGE
    const mockCallback = jest.fn();

    // ACT
    uploadFile(mockCallback);

    // ARRANGE
    expect(mockCallback.mock.calls).toHaveLength(0);
  });
});
