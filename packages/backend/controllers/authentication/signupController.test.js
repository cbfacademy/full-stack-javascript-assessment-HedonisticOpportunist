const { signup } = require("./signupController");

describe("Validating the signupController controller.", () => {
  it("Expect the sign up function constant not to return null.", () => {
    expect(signup).not.toBeNull();
  });
});
