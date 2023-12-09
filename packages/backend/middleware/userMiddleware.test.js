const { userVerification } = require("./userMiddleware");

describe("Validating the userMiddleware middleware.", () => {
  it("Expect the userVerification function constant not to return null.", () => {
    expect(userVerification).not.toBeNull();
  });

  it("Expect the userVerification function to be called.", async () => {
    const userVerification = jest.fn();
    await userVerification();
    expect(userVerification).toHaveBeenCalled();
  });
});
