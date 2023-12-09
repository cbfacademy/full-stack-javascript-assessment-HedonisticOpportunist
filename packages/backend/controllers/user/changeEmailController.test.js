const { changeEmail } = require("./changeEmailController");

describe("Validating the changeEmailController controller.", () => {
  it("Expect the changeEmail function to be called.", async () => {
    const changeEmail = jest.fn();
    await changeEmail();
    expect(changeEmail).toHaveBeenCalled();
  });

  it("Expect the changeEmail function constant not to return null.", () => {
    expect(changeEmail).not.toBeNull();
  });
});
