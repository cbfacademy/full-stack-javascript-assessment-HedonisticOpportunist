const { userVerification } = require("./userMiddleware");

describe("Validating the userMiddleware middleware.", () => {
  it("Expect the userVerification function constant not to return null.", () => {
    expect(userVerification).not.toBeNull();
  });
});
