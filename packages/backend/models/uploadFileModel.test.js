const { fileSchema } = require("./uploadFileModel");

describe("Validating the uploadFileModel model.", () => {
  it("Expect fileSchema not to return null.", () => {
    expect(fileSchema).not.toBeNull();
  });
});
