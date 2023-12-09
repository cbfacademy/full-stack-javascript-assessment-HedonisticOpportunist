const { getFiles } = require("./getFilesController");

describe("Validating the getFilesController controller.", () => {
  it("Expect the getFiles function constant not to return null.", () => {
    expect(getFiles).not.toBeNull();
  });

  it("Expect the getFiles function to be called.", async () => {
    const getFiles = jest.fn();
    await getFiles();
    expect(getFiles).toHaveBeenCalled();
  });
});
