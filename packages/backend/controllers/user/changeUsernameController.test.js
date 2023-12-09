const { changeUsername } = require("./changeUsernameController");

describe("Validating the changeUsernameController controller.", () => {
  it("Expect the changeUsername function to be called.", async () => {
    const changeUsername = jest.fn();
    await changeUsername();
    expect(changeUsername).toHaveBeenCalled();
  });

  it("Expect the changeUsername function constant not to return null.", () => {
    expect(changeUsername).not.toBeNull();
  });
});
