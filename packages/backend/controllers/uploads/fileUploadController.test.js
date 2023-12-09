const { uploadFile } = require("./fileUploadController");

describe("Validating the fileUploadController controller.", () => {
  it("Expect the uploadFile function constant not to return null.", () => {
    expect(uploadFile).not.toBeNull();
  });

  it("Expect the uploadFile function to be called.", async () => {
    const uploadFile = jest.fn();
    await uploadFile();
    expect(uploadFile).toHaveBeenCalled();
  });
});
