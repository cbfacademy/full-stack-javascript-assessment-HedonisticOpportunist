const { fileSchema } = require("./uploadFileModel");

describe("Validating the upload file model.", () => {
  it("Expect fileSchema not to return null.", () => {
    expect(fileSchema).not.toBeNull();
  });
});
