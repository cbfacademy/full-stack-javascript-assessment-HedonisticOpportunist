const { uploadFile } = require("./fileUploadController");

describe("Validating the fileUploadController controller.", () => {
  it("Expect the uploadFile function constant not to return null.", () => {
    expect(uploadFile).not.toBeNull();
  });
});
