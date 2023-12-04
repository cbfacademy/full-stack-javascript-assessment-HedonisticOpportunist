const { fileUploadRoute } = require("./fileUploadRoute");

describe("Validating the fileUploadRoute route.", () => {
  it("Expect the file upload router not to return null.", () => {
    expect(fileUploadRoute).not.toBeNull();
  });
});
