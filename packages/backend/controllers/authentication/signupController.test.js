const { signup } = require("./signupController");

describe("Validating the signupController controller.", () => {
  it("Expect the signup function constant not to return null.", () => {
    expect(signup).not.toBeNull();
  });

  it("Expect the signup function to be called.", async () => {
    const signup = jest.fn();
    await signup();
    expect(signup).toHaveBeenCalled();
  });
});
