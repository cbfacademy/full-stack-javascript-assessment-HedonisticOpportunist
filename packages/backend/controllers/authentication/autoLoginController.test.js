const { autoLogin } = require("./autoLoginController");

describe("Validating the auto login controller.", () => {
  it("Expect the auto login function constant not to return null.", () => {
    expect(autoLogin).not.toBeNull();
  });
});
