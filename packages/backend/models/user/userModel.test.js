const { userSchema } = require("./userModel");

describe("Validating the userModel model.", () => {
  it("Expect userSchema not to return null.", () => {
    expect(userSchema).not.toBeNull();
  });
});
