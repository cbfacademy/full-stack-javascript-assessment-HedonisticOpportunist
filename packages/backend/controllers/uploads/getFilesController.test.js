const { getFiles } = require("./getFilesController");

describe("Validating the getFilesController controller.", () => {
  it("Expect the getFiles function constant not to return null.", () => {
    expect(getFiles).not.toBeNull();
  });
});
