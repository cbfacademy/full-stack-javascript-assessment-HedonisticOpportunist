const { getFiles } = require("./getFilesController");

describe("Validating the get files controller.", () => {
  it("Expect the getFiles function constant not to return null.", () => {
    expect(getFiles).not.toBeNull();
  });
});
