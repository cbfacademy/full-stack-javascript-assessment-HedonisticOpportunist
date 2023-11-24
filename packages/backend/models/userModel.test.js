const { userSchema } = require("./userModel");

describe("Validating the user model.", () => {
  it("Expect userSchema not to return null.", () => {
    expect(userSchema).not.toBeNull();
  });
});
