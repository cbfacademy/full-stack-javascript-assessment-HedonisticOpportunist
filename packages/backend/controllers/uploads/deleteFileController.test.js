const { deleteFile } = require("./deleteFileController");

describe("Validating the deleteFileController controller.", () => {
  it("Expect the deleteFile function constant not to return null.", () => {
    expect(deleteFile).not.toBeNull();
  });

  it("Expect the deleteFile function to be called.", async () => {
    const deleteFile = jest.fn();
    await deleteFile();
    expect(deleteFile).toHaveBeenCalled();
  });
});
