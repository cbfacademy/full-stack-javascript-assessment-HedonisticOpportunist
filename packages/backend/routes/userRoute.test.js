const { userRoute } = require("./userRoute");

describe("Validating the user route.", () => {
  it("Expect user router not to return null.", () => {
    expect(userRoute).not.toBeNull();
  });
});
